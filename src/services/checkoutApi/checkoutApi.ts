import config from "config/config.json";
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
};
