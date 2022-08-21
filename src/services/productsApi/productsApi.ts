import productsClient from './productsClient';
import { GetProductsResponse } from '../../types/ApiResponse';

export async function getProducts(pageNum: number): Promise<GetProductsResponse> {
  const response = await productsClient.get<GetProductsResponse>(
    `/get-products?page=${pageNum}`
  );
  const data = response.data;
  return data;
}
