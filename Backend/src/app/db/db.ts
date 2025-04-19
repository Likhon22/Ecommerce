/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import ApiError from '../error/ApiError';
import config from '../config';

const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database connected successfully');
  } catch (err) {
    throw new ApiError(500, 'Failed to connect to database');
  }
};
export default connectDB;
