import { Request, Response } from 'express';
import Product from '../models/product';

export const addProduct = async (req: Request, res: Response) => {
  const title = req.body.title;
  const product = new Product({
    title: title,
    imageUrl: '../images/maciek.jpg',
  });

  await product.save();
  res.status(201).json({ message: 'added successfully' });
};

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res
    .status(200)
    .json({ message: 'Get products successfully', products: products });
};
