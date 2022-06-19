import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { User, signUp } from "../../api";

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
    console.log(response);

    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login: (state) => {
    //   state.isLoggedIn = true;
    // },
    // logout: (state) => {
    //   state.isLoggedIn = false;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.isLoggedIn = true;

      return;
    });
  },
});

// export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
