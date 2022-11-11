import { IProductItem } from "./product";

interface ICartItem {
  product: IProductItem;
  quantity: number;
}

export interface ICart {
  items: ICartItem[];
}
