import { IProductItem } from "./product/product";

interface ICartItem {
  product: IProductItem;
  quantity: number;
}

export interface ICart {
  items: ICartItem[];
}
