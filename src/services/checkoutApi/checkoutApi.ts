import { authorizationHeader } from "services/authorization/authorization";
import { ICart } from "types/cart/cart";

import { checkoutClient } from "./checkoutClient";

interface ICheckoutResponse {
  url: string;
}

export const checkoutCreation = async (
  cart: ICart,
): Promise<ICheckoutResponse> => {
  const response = await checkoutClient.post<ICheckoutResponse>(
    `/create-checkout`,
    { items: cart.items },
    {
      headers: {
        "Content-Type": "application/json",
        ...authorizationHeader(),
      },
    },
  );
  return response.data;
};

export const getCheckoutData = async (): Promise<ICheckoutResponse> => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const response = await checkoutClient.get<ICheckoutResponse>(
    `order-success?session_id=${urlParams.get("session_id") ?? ""}`,
    {
      headers: {
        ...authorizationHeader(),
      },
    },
  );

  return response.data;
};
