import calculatePrice from '../../utils/calculatePrice';
import { TProduct } from './product.interface';
import Product from './product.model';

const createProductsIntoDB = async (payload: TProduct) => {
  const discountAmount = calculatePrice(payload.price, payload.discount);
  if (discountAmount) {
    payload.discountPrice = discountAmount;
  }

  return await Product.create(payload);
};

const getProductsFromDB = async () => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  return products;
};
const productServices = {
  createProductsIntoDB,
  getProductsFromDB,
};

export default productServices;
