import { authorizationHeader } from "services/Authorization/authorization";
import { IAddItemToCartResponse } from "types/ApiResponse";
import { ICart } from "types/cart";
import { IUser } from "types/user";

import cartClient from "./cartApiClient";

export const getCart = async (): Promise<ICart> => {
  const response = await cartClient.get<IUser>("get-cart", {
    headers: {
      "Content-Type": "application/json",
      ...authorizationHeader(),
    },
  });
  return response.data.cart;
};

export const addItemToCart = async (
  itemTitle: string,
): Promise<IAddItemToCartResponse> => {
  const response = await cartClient.post<IAddItemToCartResponse>("/cart/add", {
    itemTitle,
  });
  return response.data;
};
