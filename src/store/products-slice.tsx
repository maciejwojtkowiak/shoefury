import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product"
import { IProductInitial } from "./types/productState";

const productsSlice = createSlice({
    name: "productsSlice",
    initialState: {
         products: [],
    }  as IProductInitial,
 
    reducers: {
        setProducts(state: IProductInitial, action:PayloadAction<Product[]>) {
            state.products = [...action.payload]
            
        }
    }
})

export const productsReducer =  productsSlice.reducer
export const productsAction = productsSlice.actions