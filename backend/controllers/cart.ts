import { NextFunction, Request, Response } from 'express';
import { IAuthUserRequest } from '../types/User';
import User from '../models/user';
import Product from '../models/product';
import { IProduct } from '../types/Product';

export const addToCart = async (req: Request, res: Response, next: NextFunction) => {
  const foundUser = await User.findOne({ _id: req.body.userId });
  const addedProduct = (await Product.findOne({
    title: req.body.productTitle,
  })) as IProduct;
  console.log('ITEMS', foundUser!.cart.items[0].toString());
  const cartItemExists = foundUser!.cart.items.find(
    (item) => item.title === req.body.productTitle
  );
  console.log(cartItemExists);
  const cartItems = foundUser!.cart.items;
  const updatedCart = {
    items: [addedProduct],
    quantity: 1,
  };
  foundUser!.cart = updatedCart;
  await foundUser!.save();
  console.log(foundUser!.cart.items);
  console.log(addedProduct);
};
