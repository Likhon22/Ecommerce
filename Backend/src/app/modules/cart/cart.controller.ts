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

const cartControllers = {
  createCart,
};
export default cartControllers;
