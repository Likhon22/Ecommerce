import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import productServices from './product.services';
import sendResponse from '../../utils/sendResponse';

const createProducts = catchAsync(async (req: Request, res: Response) => {
  const products = await productServices.createProductsIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    message: 'Product created successfully',
    data: products,
    success: true,
  });
});
const getProducts = catchAsync(async (req: Request, res: Response) => {
  const products = await productServices.getProductsFromDB();
  sendResponse(res, {
    statusCode: 200,
    message: 'Products retrieved successfully',
    data: products,
    success: true,
  });
});
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await productServices.getSingleProductFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Product retrieved successfully',
    data: product,
    success: true,
  });
});

const productControllers = {
  createProducts,
  getProducts,
  getSingleProduct,
};
export default productControllers;
