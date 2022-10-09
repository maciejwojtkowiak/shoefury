import config from "config/config.json";
import { authorizationHeader } from "services/Authorization/authorization";
import { ICart } from "types/cart";

import { checkoutClient } from "./checkoutClient";

interface ICheckoutResponse {
  url: string;
}

export const checkoutCreation = async (
  cart: ICart,
): Promise<ICheckoutResponse> => {
  const response = await checkoutClient.post<ICheckoutResponse>(
    `${config.backendDomain}/checkout/create-checkout`,
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
  console.log("PARAM", urlParams.get("session_id"));
  const response = await checkoutClient.get<ICheckoutResponse>(
    `${config.backendDomain}/checkout/order-success?session_id=${
      urlParams.get("session_id") ?? ""
    }`,
    {
      headers: {
        ...authorizationHeader(),
      },
    },
  );
  console.log("DATA", response.data);
  return response.data;
};