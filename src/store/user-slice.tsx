import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setIsAuth(state) {
      if (localStorage.getItem('token')) state.isAuth = true;
      else state.isAuth = false;
    },
  },
});

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;
