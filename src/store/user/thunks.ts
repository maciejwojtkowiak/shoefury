import { createAsyncThunk } from "@reduxjs/toolkit";
import { editName } from "services/profileApi/profileApi";

export const editUserName = createAsyncThunk(
  "/edit-name",
  async (name: string): Promise<string> => {
    const response = await editName(name);
    return response;
  },
);
