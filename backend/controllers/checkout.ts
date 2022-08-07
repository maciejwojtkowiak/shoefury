import { Response, Request } from 'express';
import { IProduct } from '../types/Product';
import { stripeInstance } from '../utils/stripe';

export const createCheckout = async (req: Request, res: Response) => {
  const productsArr: any = [{ price: 10, quantity: 1 }];
  const products = req.body.products;
  products.forEach((product: any) =>
    productsArr.push({ price: product.product.price, quantity: product.quantity })
  );

  const session = await stripeInstance.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: 2000,
          product_data: {
            name: 'T-shirt',
            description: 'Comfortable cotton t-shirt',
            images: ['https://example.com/t-shirt.png'],
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://localhost:3000',
    cancel_url: 'https://localhost:3000',
  });

  res.json({ url: session.url });
};
