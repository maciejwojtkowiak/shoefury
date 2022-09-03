import { Product } from "types/product";

export interface GetProductsResponse {
    products: Product[];
    pagesCount: number; 
    totalProducts: string
}

export interface CheckAuthResponse {
    isAuth: boolean
}

export interface ApiResponse<T> {
    data: T
}