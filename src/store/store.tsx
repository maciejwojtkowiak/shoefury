import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user-slice';

const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
