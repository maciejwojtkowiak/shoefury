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
  const LIMIT_PER_PAGE = 9;
  const currentPage = req.query.page || 1;
  console.log("PARAMS", req.query)
  const productCount = await Product.countDocuments();
  const products = await Product.find()
    .skip((+currentPage - 1) * LIMIT_PER_PAGE)
    .limit(LIMIT_PER_PAGE);
  res.status(200).json({
    message: 'Get products successfully',
    products: products,
    totalProducts: productCount,
  });
};
