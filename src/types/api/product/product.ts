import { IProductItemDetail } from "types/product/product";

import { ApiResponseDefault } from "../ApiResponseDefault";

export interface IGetProductResponse extends ApiResponseDefault {
  product: IProductItemDetail;
}
