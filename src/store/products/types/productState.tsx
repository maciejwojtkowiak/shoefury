import { IProduct } from "types/product";

export interface IProductInitial {
  products: IProduct[];
  chosenProduct: IProduct | null;
  pageNum: number;
  totalProducts: string;
}
