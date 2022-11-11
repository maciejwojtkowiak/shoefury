import { IProductItem, IProductItemDetail } from "types/product/product";

import { ApiResponseDefault } from "./ApiResponseDefault";

export interface IGetProductsResponse extends ApiResponseDefault {
  products: IProductItem[];
  pagesCount: number;
  totalProducts: string;
}

export interface IResponseError extends ApiResponseDefault {
  err: string;
  message: string;
}

export interface IGetProductResponse extends ApiResponseDefault {
  product: IProductItemDetail;
}

export interface ICheckAuthResponse extends ApiResponseDefault {
  isAuth: boolean;
}

export interface ILoginResponse extends ApiResponseDefault {
  token: string;
}

export interface IAddItemToCartResponse extends ApiResponseDefault {}

export interface IAddProductResponse extends ApiResponseDefault {}
