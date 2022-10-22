import { authorizationHeader } from "services/authorization/authorization";
import { IGetProductResponse } from "types/api/product/product";

import {
  IAddProductResponse,
  IGetProductsResponse,
  // IGetProductsResponse,
} from "../../types/api/ApiResponse";

import productsClient from "./productsClient";

export async function getProducts(
  pageNum: number,
): Promise<IGetProductsResponse> {
  const response = await productsClient.get<IGetProductsResponse>(
    `/get-products?page=${pageNum}`,
  );

  const data = response.data;
  return data;
}

export async function getProduct(
  productId: string,
): Promise<IGetProductResponse> {
  const response = await productsClient.get<IGetProductResponse>(
    `/get-product/${productId}`,
  );
  return response.data;
}

export async function addProduct(
  formData: FormData,
): Promise<IAddProductResponse> {
  const response = await productsClient.post<IAddProductResponse>(
    "/add-product",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        ...authorizationHeader(),
      },
    },
  );

  return response.data;
}
