import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetProductsResponse } from "types/ApiResponse";
import { Product } from "../types/product"
import { IProductInitial } from "./types/productState";

const productsSlice = createSlice({
    name: "productsSlice",
    initialState: {
        products: [],
        pageNum: 0,
        totalProducts: "",
    }  as IProductInitial,
 
    reducers: {
        setProductsData(state: IProductInitial, action:PayloadAction<GetProductsResponse>) {
            state.products = [...action.payload.products] 
            state.pageNum = action.payload.pagesCount
            state.totalProducts = action.payload.totalProducts
        }
    }
})

export const productsReducer =  productsSlice.reducer
export const productsAction = productsSlice.actions