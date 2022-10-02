import { createSlice } from "@reduxjs/toolkit";

import { ICartState } from "./types/types";

const cartInitial: ICartState = {
  cart: {
    items: [],
  },
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartInitial,
  reducers: {},
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
