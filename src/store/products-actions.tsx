import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { getProducts } from "services/productsApi/productsApi"
import { productsAction } from "./products-slice"

export const fetchProducts = (pageNum: number) => {
    return async(dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const products = await getProducts(pageNum)
            dispatch(productsAction.setProducts(products.products))
        } catch(error) {
            console.log(error)
        }
    }
}