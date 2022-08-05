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

  const cartItem = foundUser!.cart.items.find(
    (item) => item.productId.toString() === addedProduct._id.toString()
  );
  console.log(cartItem);
  if (cartItem) {
    cartItem.quantity++;
  }
  if (!cartItem) {
    const cartItems = foundUser!.cart.items;
    const updatedCart = {
      items: [...cartItems, { productId: addedProduct._id, quantity: 1 }],
    };
    foundUser!.cart = updatedCart;
  }

  console.log(foundUser!.cart.items);

  await foundUser!.save();
};
