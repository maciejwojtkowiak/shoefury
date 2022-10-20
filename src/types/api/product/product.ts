import { IProduct } from "types/product";

import { ApiResponseDefault } from "../ApiResponseDefault";

export interface IGetProductResponse extends ApiResponseDefault {
  product: IProduct;
}
