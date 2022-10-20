import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetProductResponse } from "types/api/product/product";
import { IGetProductsResponse } from "types/ApiResponse";
import { IProduct } from "types/product";

import { IProductInitial } from "./types/productState";
import { fetchProduct, fetchProducts } from "./thunks";

const initialState: IProductInitial = {
  products: [],
  chosenProduct: null,
  pageNum: 0,
  totalProducts: "",
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,

  reducers: {
    setChosenProduct(state: IProductInitial, action: PayloadAction<IProduct>) {
      state.chosenProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state: IProductInitial, action: PayloadAction<IGetProductsResponse>) => {
        state.products = [...action.payload.products];
        state.pageNum = action.payload.pagesCount;
        state.totalProducts = action.payload.totalProducts;
      },
    );
    builder.addCase(
      fetchProduct.fulfilled,
      (state: IProductInitial, action: PayloadAction<IGetProductResponse>) => {
        state.chosenProduct = action.payload.product;
      },
    );
  },
});

export const productsReducer = productsSlice.reducer;
export const productsAction = productsSlice.actions;
