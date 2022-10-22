import { ICart } from "../cart/cart";

export interface IUser {
  name: string;
  email: string;
  cart: ICart;
}
