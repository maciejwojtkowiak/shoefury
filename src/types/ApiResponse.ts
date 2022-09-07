import { Product } from "types/product";

export interface GetProductsResponse {
  products: Product[];
  pagesCount: number;
  totalProducts: string;
}

export interface GetProductResponse {
  product: Product;
}

export interface CheckAuthResponse {
  isAuth: boolean;
}

export interface ApiResponse<T> {
  data: T;
}

export interface LoginResponse {
  message: string;
  token: string;
}
