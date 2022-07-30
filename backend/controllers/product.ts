import { Request, Response } from 'express';

const { Product } = require('../models/product');

export const addProduct = async (req: Request, res: Response) => {
  const title = req.body.title;
  const product = new Product({
    title: title,
  });

  await product.save();
  res.status(201).json({ message: 'added successfully' });
};

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  console.log(products);
  res
    .status(200)
    .json({ message: 'Get products successfully', products: products });
};
