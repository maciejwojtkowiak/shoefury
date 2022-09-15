import { Product } from "types/product";

export interface IGetProductsResponse {
  products: Product[];
  pagesCount: number;
  totalProducts: string;
}

export interface IGetProductResponse {
  product: Product;
}

export interface ICheckAuthResponse {
  isAuth: boolean;
}

export interface ApiResponse<T> {
  data: T;
}

export interface ILoginResponse {
  message: string;
  token: string;
}
