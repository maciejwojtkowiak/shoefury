import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "services/cartApi/cartApi";

export const fetchCart = createAsyncThunk("get-cart", async () => {
  const response = await getCart();
  return response;
});
