import { IProduct } from "types/product";

import { ApiResponseDefault } from "./api/ApiResponseDefault";

export interface IGetProductsResponse extends ApiResponseDefault {
  products: IProduct[];
  pagesCount: number;
  totalProducts: string;
}

export interface IResponseError extends ApiResponseDefault {
  err: string;
  message: string;
}

export interface IGetProductResponse extends ApiResponseDefault {
  product: IProduct;
}

export interface ICheckAuthResponse extends ApiResponseDefault {
  isAuth: boolean;
}

export interface ILoginResponse extends ApiResponseDefault {
  token: string;
}

export interface IAddItemToCartResponse extends ApiResponseDefault {}

export interface IAddProductResponse extends ApiResponseDefault {}
