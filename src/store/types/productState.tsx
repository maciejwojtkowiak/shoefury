import { Product } from "types/product"

export interface IProductInitial {
    products: Product[];
    pageNum: number;
    totalProducts: string;
}