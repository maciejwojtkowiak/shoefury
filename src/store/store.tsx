import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./cart/cart-slice";
import { productsReducer } from "./products/products-slice";
import { userReducer } from "./user/user-slice";

const store = configureStore({
  reducer: {
    userReducer,
    productsReducer,
    cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
