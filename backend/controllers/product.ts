import { Request, Response } from 'express';
import Product from '../models/product';

interface IProduct {
  title: string;
  price: string;
  imageUrl: string;
}

export const addProduct = async (req: Request<{}, {}, IProduct>, res: Response) => {
  const title = req.body.title;
  const price = req.body.price;

  const product = new Product({
    title: title,
    price: price,
    imageUrl: req.file?.path,
  });

  await product.save();
  res.status(201).json({ message: 'added successfully' });
};

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.status(200).json({ message: 'Get products successfully', products: products });
};
