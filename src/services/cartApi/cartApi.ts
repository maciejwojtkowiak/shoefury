import { authorizationHeader } from "services/authorization/authorization";
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
  productId: string,
): Promise<IAddItemToCartResponse> => {
  console.log("PRODUCT", productId);
  const response = await cartClient.post<IAddItemToCartResponse>(
    "/add",
    { productId },
    {
      headers: {
        ...authorizationHeader(),
      },
    },
  );
  console.log("RESPONSE", response);
  return response.data;
};
