import { IProduct } from "./product";

export interface ICart {
  product: IProduct;
  quantity: number;
  _id: string;
}
