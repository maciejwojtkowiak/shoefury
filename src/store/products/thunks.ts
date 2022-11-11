import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  getProduct,
  getProducts,
} from "services/productApi/productsApi";
import {
  addReviewOfProduct,
  IProductData,
} from "services/productApi/reviewApi";
import { IGetProductsResponse } from "types/api/ApiResponse";
import { IGetProductResponse } from "types/api/product/product";

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
  "/add-product",
  async (formData: FormData) => {
    const response = await addProduct(formData);
    return response;
  },
);

export const addReview = createAsyncThunk(
  "/add-review",
  async (productData: IProductData) => {
    const response = await addReviewOfProduct(productData);
    return response;
  },
);
