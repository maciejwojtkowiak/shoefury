import { authorizationHeader } from "services/authorization/authorization";

import productsClient from "./productsClient";

export interface IProductData {
  rate: number;
  productId: string;
}
export const addReviewOfProduct = async (
  productData: IProductData,
): Promise<void> => {
  const response = await productsClient.post("/add-review", productData, {
    headers: {
      ...authorizationHeader(),
    },
  });
  console.log(response);
};
