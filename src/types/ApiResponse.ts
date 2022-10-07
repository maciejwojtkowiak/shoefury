import { IProduct } from "types/product";

export interface IGetProductsResponse {
  products: IProduct[];
  pagesCount: number;
  totalProducts: string;
}

export interface IResponseError {
  err: string;
  message: string;
}

export interface IGetProductResponse {
  product: IProduct;
}

export interface ICheckAuthResponse {
  isAuth: boolean;
}

export interface ApiResponse<T> {
  data: T;
  err: boolean;
  message: string;
}

export interface ILoginResponse {
  message: string;
  token: string;
}

export interface IAddItemToCartResponse {
  message: string;
  error: boolean;
}

export interface IAddProductResponse {
  message: string;
  error: boolean;
}
