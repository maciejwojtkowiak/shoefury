import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetProductsResponse } from "types/ApiResponse";

import { IProductInitial } from "./types/productState";

const initialState: IProductInitial = {
  products: [],
  pageNum: 0,
  totalProducts: "",
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,

  reducers: {
    setProductsData(
      state: IProductInitial,
      action: PayloadAction<GetProductsResponse>,
    ) {
      state.products = [...action.payload.products];
      state.pageNum = action.payload.pagesCount;
      state.totalProducts = action.payload.totalProducts;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const productsAction = productsSlice.actions;
