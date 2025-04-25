import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import authServices from './auth.services';
import sendResponse from '../../utils/sendResponse';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const newUser = await authServices.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: 'User created successfully',
    success: true,
    data: newUser,
  });
});

const authControllers = {
  createUser,
};
export default authControllers;
