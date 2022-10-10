import { authorizationHeader } from "services/authorization/authorization";

import {
  IAddProductResponse,
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
  console.log(response, "PRODUCT");
  return response.data;
}
