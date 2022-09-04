import productsClient from './productsClient';
import {
  GetProductResponse,
  GetProductsResponse
} from '../../types/ApiResponse';

export async function getProducts(
  pageNum: number
): Promise<GetProductsResponse> {
  const response = await productsClient.get<GetProductsResponse>(
    `/get-products?page=${pageNum}`
  );
  const data = response.data;
  return data;
}

// export async function getProduct(
//   productId: string
// ): Promise<GetProductResponse> {
//   const response = await productsClient.get<GetProductResponse>('hej');
//   return response;
// }
