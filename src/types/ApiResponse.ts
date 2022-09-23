import { IProduct } from "types/product";

export interface IGetProductsResponse {
  products: IProduct[];
  pagesCount: number;
  totalProducts: string;
}

export interface IGetProductResponse {
  product: IProduct;
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
