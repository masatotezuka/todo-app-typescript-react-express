import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { User, signUp, login } from "../../api";

type InitialState = {
  user: User;
  isLoggedIn: boolean;
  status: "idle" | "pending" | "fulfilled" | "rejected";
};

const initialState: InitialState = {
  user: { email: "" },
  isLoggedIn: false,
  status: "idle",
};

const apiUrl = "http://localhost:8000/api";

export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async (data: User) => {
    const response = await signUp(`${apiUrl}/sign-up`, data);
    return response.data;
  }
);

export const loginUser = createAsyncThunk("auth/login", async (data: User) => {
  const response = await login(`${apiUrl}/login`, data);
  console.log(data);

  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.isLoggedIn = true;
        state.user = action.payload[0];
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.isLoggedIn = true;
        console.log(action.payload);

        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
