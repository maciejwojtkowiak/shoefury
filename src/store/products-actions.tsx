import { AnyAction,  } from "@reduxjs/toolkit"
import { getProducts } from "services/productsApi/productsApi"
import { productsAction } from "./products-slice"
import { AppDispatch } from "./store"

export const fetchProducts = (pageNum: number) => {
    return async(dispatch: AppDispatch) => {
        try {
            const products = await getProducts(pageNum)
            dispatch(productsAction.setProductsData(products))
        } catch(error) {
            console.log(error)
        }
    }
}