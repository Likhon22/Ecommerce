import { FilterQuery, Query } from 'mongoose';
import { excludeFields } from '../types/builder';
class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  search(searchableFields: string[]) {
    const searchTerm = this?.query?.search as string;
    if (searchTerm) {
      this.modelQuery.find({
        $or: searchableFields.map(field => ({
          [field]: { $regex: searchTerm, $options: 'i' },
        })),
      }) as FilterQuery<T>;
    }
    return this;
  }
  filter() {
    const queryCopy = { ...this.query };
    excludeFields.forEach(field => delete queryCopy[field]);
    this.modelQuery = this.modelQuery.find(queryCopy as FilterQuery<T>);
    return this;
  }
  sort() {
    const sortOrder =
      (this?.query?.sort as string)?.split(',')?.join(' ') || '-createdAt';
    this.modelQuery = this.modelQuery.sort(sortOrder as string);
    return this;
  }
  paginate() {
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const skip = (page - 1) * limit;
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }
  fields() {
    const fields = (this?.query?.fields as string)?.split(',')?.join(' ') || '';
    this.modelQuery = this.modelQuery.select(fields as string);
    return this;
  }
  async countTotal() {
    const totalQueries = this.modelQuery.getQuery();
    const totalDocuments =
      await this.modelQuery.model.countDocuments(totalQueries);
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const totalPage = Math.ceil(totalDocuments / limit);
    return { totalDocuments, page, limit, totalPage };
  }
}

export default QueryBuilder;
