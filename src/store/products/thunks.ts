import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  getProduct,
  getProducts,
} from "services/productsApi/productsApi";
import {
  addReviewOfProduct,
  IProductData,
} from "services/productsApi/reviewApi";
import { IGetProductResponse } from "types/api/product/product";
import { IGetProductsResponse } from "types/ApiResponse";

export const fetchProducts = createAsyncThunk(
  "/products",
  async (pageNum: number): Promise<IGetProductsResponse> => {
    const response = await getProducts(pageNum);
    return response;
  },
);

export const fetchProduct = createAsyncThunk(
  "/get-product",
  async (productId: string): Promise<IGetProductResponse> => {
    const response = await getProduct(productId);
    return response;
  },
);

export const createProduct = createAsyncThunk(
  "add-product",
  async (formData: FormData) => {
    const response = await addProduct(formData);
    console.log("RESP", response);
    return response;
  },
);

export const addReview = createAsyncThunk(
  "add-review",
  async (productData: IProductData) => {
    const response = await addReviewOfProduct(productData);
    console.log("RESP", response);
    return response;
  },
);
