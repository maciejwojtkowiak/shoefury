import { authorizationHeader } from "services/authorization/authorization";
import { IAddItemToCartResponse } from "types/api/ApiResponse";
import { IDeleteCartItemResponse } from "types/api/cart/cart";
import { ICart } from "types/cart/cart";
import { IUser } from "types/user/user";

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
  const response = await cartClient.post<IAddItemToCartResponse>(
    "add",
    { productId },
    {
      headers: {
        ...authorizationHeader(),
      },
    },
  );
  return response.data;
};

export const deleteCartItem = async (
  productId: string,
): Promise<IDeleteCartItemResponse | any> => {
  try {
    const response = await cartClient.post<IDeleteCartItemResponse>(
      "delete-item",
      { productId },
      {
        data: productId,
        headers: {
          ...authorizationHeader(),
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
