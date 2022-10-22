import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "types/cart/cart";

import { ICartState } from "./types/types";
import { fetchCart } from "./thunks";

const cartInitial: ICartState = {
  cart: {
    items: [],
  },
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartInitial,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCart.fulfilled,
      (state: ICartState, action: PayloadAction<ICart>) => {
        state.cart.items = [...action.payload.items];
      },
    );
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
