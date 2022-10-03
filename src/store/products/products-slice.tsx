import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetProductsResponse } from "types/ApiResponse";
import { IProduct } from "types/product";

import { IProductInitial } from "./types/productState";
import { fetchProducts } from "./thunks";

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
  },
});

export const productsReducer = productsSlice.reducer;
export const productsAction = productsSlice.actions;
