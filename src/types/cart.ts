import { IProduct } from "./product";

export interface CartProduct {
  product: IProduct;
  quantity: number;
  _id: string;
}
