import { Response, Request } from 'express';
import { IProduct } from '../types/Product';
import { stripeInstance } from '../utils/stripe';

export const createCheckout = async (req: Request, res: Response) => {
  const productsArr: any = [];
  const products = req.body.products;
  console.log(products);
  products.forEach((product: any) =>
    productsArr.push({
      price_data: {
        currency: 'usd',
        unit_amount: product.product.price * 100,
        product_data: {
          name: product.product.title,
          description: 'HEJ',
        },
      },
      quantity: product.quantity,
    })
  );

  const session = await stripeInstance.checkout.sessions.create({
    line_items: productsArr,
    mode: 'payment',
    success_url: 'https://localhost:3000',
    cancel_url: 'https://localhost:3000',
  });

  res.json({ url: session.url });
};
