import { IProduct } from "types/product";

export interface IProductInitial {
  products: IProduct[];
  pageNum: number;
  totalProducts: string;
}
