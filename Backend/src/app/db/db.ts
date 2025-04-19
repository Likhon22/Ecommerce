/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import ApiError from '../error/ApiError';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  } catch (err) {
    throw new ApiError(500, 'Failed to connect to database');
  }
};
export default connectDB;
