import QueryBuilder from '../../builder/QueryBuilder';
import ApiError from '../../error/ApiError';
import calculatePrice from '../../utils/calculatePrice';
import { productSearchableFields } from './product.constant';
import { TProduct } from './product.interface';
import Product from './product.model';

const createProductsIntoDB = async (payload: TProduct) => {
  const discountAmount = calculatePrice(payload.price, payload.discount);
  if (discountAmount) {
    payload.discountPrice = discountAmount;
  }

  return await Product.create(payload);
};

const getProductsFromDB = async (query: Record<string, unknown>) => {
  const products = new QueryBuilder(Product.find(), query)
    .search(productSearchableFields)
    .filter()
    .paginate()
    .sort();
  const result = await products.modelQuery;
  const meta = await products.countTotal();

  return { result, meta };
};
const getSingleProductFromDB = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(400, 'Product not found');
  }
  return product;
};
const productServices = {
  createProductsIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
};

export default productServices;
