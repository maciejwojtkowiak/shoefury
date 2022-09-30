import { ICart } from "types/cart";

import cartClient from "./cartApiClient";

export const getCart = async (): Promise<ICart> => {
  const response = await cartClient.get<ICart>("get-cart");
  return response.data;
};
