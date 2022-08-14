import { Product } from "../../types/Product";

export interface GetProductsResponse {
    products: Product[];
    pagesCount: number; 
    totalProducts: string
}