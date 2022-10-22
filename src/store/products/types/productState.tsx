import { IProductItem, IProductItemDetail } from "types/product/product";

export interface IProductInitial {
  products: IProductItem[];
  chosenProduct: IProductItemDetail | null;
  pageNum: number;
  totalProducts: string;
}
