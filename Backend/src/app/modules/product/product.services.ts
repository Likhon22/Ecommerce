import { TProduct } from './product.interface';
import Product from './product.model';

const createProductsIntoDB = async (payload: TProduct) => {
  return await Product.create(payload);
};

const productServices = {
  createProductsIntoDB,
};

export default productServices;
