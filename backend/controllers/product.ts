import { Request, Response } from "express";

const { Product } = require('../models/product');

exports.addProduct = async (req: Request, res: Response) => {
  const title = req.body.title;
  const product = new Product({
    title: title
  })
 
  await product.save();
  res.status(201).json({ message: 'added successfully' });
};

exports.getProducts = async (req: Request, res: Response) => {
  const products = await Product.find()
  console.log(products)
  res
    .status(200)
    .json({ message: 'Get products successfully', products: products });
};
