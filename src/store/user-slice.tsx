import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean | null>) {
      if (action.payload) state.isAuth = true;
      else state.isAuth = false;
    },
  },
});

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;
