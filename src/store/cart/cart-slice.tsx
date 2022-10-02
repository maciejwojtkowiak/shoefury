import { createSlice } from "@reduxjs/toolkit";

import { ICartState } from "./types/types";

const cartInitial: ICartState = {
  cart: {
    items: [],
    _id: "",
  },
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartInitial,
  reducers: {},
});
