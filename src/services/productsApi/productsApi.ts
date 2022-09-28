import {
  IGetProductResponse,
  IGetProductsResponse,
  // IGetProductsResponse,
} from "../../types/ApiResponse";

import productsClient from "./productsClient";

export async function getProducts(
  pageNum: number,
): Promise<IGetProductsResponse> {
  const response = await productsClient.get<IGetProductsResponse>(
    `/get-products?page=${pageNum}`,
  );
  console.log("RES", response);
  const data = response.data;
  return data;
}

export async function getProduct(
  productId: string,
): Promise<IGetProductResponse> {
  const response = await productsClient.get<IGetProductResponse>("hej");
  return response.data;
}
