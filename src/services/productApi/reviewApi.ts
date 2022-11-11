import { authorizationHeader } from "services/authorization/authorization";

import productsClient from "./productsClient";

export interface IProductData {
  rate: number;
  productId: string;
}
export const addReviewOfProduct = async (
  productData: IProductData,
): Promise<void> => {
  await productsClient.post("/add-review", productData, {
    headers: {
      ...authorizationHeader(),
    },
  });
};

export const getProductReviews = async (productId: string): Promise<void> => {
  await productsClient.post(`get-review/${productId}`);
};
