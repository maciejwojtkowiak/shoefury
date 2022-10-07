import { createAsyncThunk } from "@reduxjs/toolkit";
import { addItemToCart, getCart } from "services/cartApi/cartApi";

export const fetchCart = createAsyncThunk("get-cart", async () => {
  const response = await getCart();
  return response;
});

export const addProductToCart = createAsyncThunk(
  "add-item-to-cart",
  async (productTitle: string) => {
    const response = await addItemToCart(productTitle);
    return response;
  },
);
