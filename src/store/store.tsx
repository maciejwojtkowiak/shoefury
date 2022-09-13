import { configureStore } from "@reduxjs/toolkit";

import { productsReducer } from "./products-slice";
import { userReducer } from "./user-slice";

const store = configureStore({
  reducer: {
    userReducer,
    productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
