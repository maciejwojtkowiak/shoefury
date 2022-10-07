import {
  IAddProductResponse,
  IGetProductResponse,
  IGetProductsResponse,
  // IGetProductsResponse,
} from "../../types/ApiResponse";

import productsClient from "./productsClient";

export interface IProductValues {
  title: string;
  price: string;
  description: string;
  selectedFile: File;
}

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
  dataObj: IProductValues,
): Promise<IAddProductResponse> {
  const formData = new FormData();
  formData.append("title", dataObj.title);
  formData.append("image", dataObj.selectedFile);
  formData.append("price", dataObj.price);
  formData.append("description", dataObj.description);
  const response = await productsClient.post<IAddProductResponse>(
    "/add-product",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
      },
    },
  );
  console.log(response, "PRODUCT");
  return response.data;
}
