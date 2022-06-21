import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, signUp, login } from "../../api";

type InitialState = {
  user: User;
  isLoggedIn: boolean;
  jwtToken: string;
  status: "idle" | "pending" | "fulfilled" | "rejected";
};

const initialState: InitialState = {
  user: { email: "" },
  isLoggedIn: false,
  jwtToken: "",
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
        state.user = action.payload.user;
        state.jwtToken = action.payload.jwtToken;
      });
  },
});

export default authSlice.reducer;
