import { Request, Response } from 'express';

const getProducts = (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Get products',
  });
};

const productServices = {
  getProducts,
};

export default productServices;
