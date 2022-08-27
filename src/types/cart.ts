import { Product } from "./product";

export interface CartProduct {
    product: Product
    quantity: number
    _id: string;
}