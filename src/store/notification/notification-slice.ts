import { createSlice } from "@reduxjs/toolkit";

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
});

export const notificationAction = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
