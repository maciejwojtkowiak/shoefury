import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user-slice";
import { productsReducer } from "./products-slice";

const store = configureStore({
  reducer: {
    userReducer,
    productsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
