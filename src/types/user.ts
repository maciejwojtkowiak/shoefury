import { ICart } from "./cart";

export interface IUser {
  name: string;
  email: string;
  cart: ICart;
}
