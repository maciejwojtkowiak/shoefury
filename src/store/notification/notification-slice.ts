import { createSlice } from "@reduxjs/toolkit";

export type NotificationType = "info" | "success" | "error";

interface NotificationInitialState {
  isShown: boolean;
  message: string;
  type: NotificationType;
}

const notificationInitial: NotificationInitialState = {
  isShown: true,
  message: "",
  type: "info",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationInitial,
  reducers: {},
});

export const notificationAction = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
