import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import authServices from './auth.services';
import sendResponse from '../../utils/sendResponse';
import config from '../../config';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const newUser = await authServices.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: 'User created successfully',
    success: true,
    data: newUser,
  });
});
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken, accessToken } = await authServices.loginUserFromDB(
    req.body,
  );
  res.cookie('token', refreshToken, {
    httpOnly: true,
    secure: config.node_env === 'production',
    sameSite: 'none',
    maxAge: 24 * 60 * 60 * 1000,
  });

  sendResponse(res, {
    statusCode: 200,
    message: 'User logged in successfully',
    success: true,
    data: { accessToken, refreshToken },
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) {
    return sendResponse(res, {
      statusCode: 400,
      message: 'Token is required',
      success: false,
      data: null,
    });
  }
  const accessToken = await authServices.refreshToken(token);
  sendResponse(res, {
    statusCode: 200,
    message: 'User logged in successfully',
    success: true,
    data: accessToken,
  });
});
const authControllers = {
  createUser,
  loginUser,
  refreshToken,
};
export default authControllers;
