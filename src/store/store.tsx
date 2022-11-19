import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./cart/cart-slice";
import { notificationReducer } from "./notification/notification-slice";
import { productsReducer } from "./products/products-slice";
import { userReducer } from "./user/user-slice";

const store = configureStore({
  reducer: {
    userReducer,
    productsReducer,
    cartReducer,
    notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
