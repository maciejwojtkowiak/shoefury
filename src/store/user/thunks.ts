import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "config/config";
import { register } from "services/authApi/register";
import { editName } from "services/profileApi/profileApi";
import { IRegisterData } from "types/auth/Auth";

export const editUserName = createAsyncThunk(
  "/edit-name",
  async (name: string): Promise<string> => {
    const response = await editName(name);
    return response;
  },
);

export const registerUser = createAsyncThunk(
  "/register",
  async (authData: IRegisterData): Promise<string> => {
    const response = await register(
      authData.name,
      authData.email,
      authData.password,
    );
    localStorage.setItem(config.jwtToken, response.token);
    return response.message;
  },
);
