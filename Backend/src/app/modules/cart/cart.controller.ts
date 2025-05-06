import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import cartServices from './cart.services';

const createCart = catchAsync(async (req: Request, res: Response) => {
  const cart = await cartServices.createCartIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Cart created successfully',
    data: cart,
  });
});

const getCart = catchAsync(async (req: Request, res: Response) => {
  const cart = await cartServices.getCartFromDB(req.params.email);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Cart retrieved successfully',
    data: cart,
  });
});
const deleteCart = catchAsync(async (req: Request, res: Response) => {
  const cart = await cartServices.deleteCartFromDB(req.params.email, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Cart deleted successfully',
    data: cart,
  });
});

const cartControllers = {
  createCart,
  getCart,
  deleteCart,
};
export default cartControllers;
