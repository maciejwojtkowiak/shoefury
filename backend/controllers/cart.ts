import { NextFunction, Request, Response } from 'express';
import User from '../models/user';
import Product from '../models/product';
import { IProduct } from '../types/Product';

export const addToCart = async (req: Request, res: Response, next: NextFunction) => {
  const currentUser = await User.findOne({ _id: req.body.userId });
  const addedProduct = (await Product.findOne({
    title: req.body.productTitle,
  })) as IProduct;

  const cartItem = currentUser!.cart.items.find(
    (item) => item.product.toString() === addedProduct._id.toString()
  );

  if (cartItem) {
    cartItem.quantity++;
  }
  if (!cartItem) {
    const cartItems = currentUser!.cart.items;
    const updatedCart = {
      items: [...cartItems, { product: addedProduct._id, quantity: 1 }],
    };
    currentUser!.cart = updatedCart;
  }

  await currentUser!.save();
  res.status(201).json({ message: 'success' });
};

export const getCart = async (req: Request, res: Response) => {
  const currentUser = await User.findOne({ _id: req.body.userId });
  const products = await currentUser!.populate('cart.items.product');
  res.status(200).json({ products: products });
};
