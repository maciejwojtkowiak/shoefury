import { IProduct } from "types/product";

import {
  IGetProductResponse,
  // IGetProductsResponse,
} from "../../types/ApiResponse";

import productsClient from "./productsClient";

export async function getProducts(pageNum: number): Promise<IProduct[]> {
  const response = await productsClient.get<IProduct[]>(
    `/get-products?page=${pageNum}`,
  );
  const data = response.data;
  return data;
}

export async function getProduct(
  productId: string,
): Promise<IGetProductResponse> {
  const response = await productsClient.get<IGetProductResponse>("hej");
  return response.data;
}
