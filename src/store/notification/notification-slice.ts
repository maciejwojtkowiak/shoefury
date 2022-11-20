import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "store/user/thunks";

export type NotificationType = "info" | "success" | "error";

interface NotificationInitial {
  isShown: boolean;
  message: string;
  type: NotificationType;
}

const notificationInitial: NotificationInitial = {
  isShown: true,
  message: "",
  type: "info",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationInitial,
  reducers: {
    showNotification(state: NotificationInitial) {
      state.isShown = true;
    },

    hideNotification(state: NotificationInitial) {
      state.isShown = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isShown = true;
      state.message = action.payload;
    });
  },
});

export const notificationAction = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
