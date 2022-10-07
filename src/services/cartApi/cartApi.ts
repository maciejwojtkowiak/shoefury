import { ICart } from "types/cart";
import { IUser } from "types/user";

import cartClient from "./cartApiClient";

export const getCart = async (): Promise<ICart> => {
  const response = await cartClient.get<IUser>("get-cart", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
    },
  });
  return response.data.cart;
};

// export const addItemToCart = async (itemTitle: string): Promise<string> => {
//   const response = await cartClient.post<string>("/cart/add", { itemTitle });
//   return response;
// };
