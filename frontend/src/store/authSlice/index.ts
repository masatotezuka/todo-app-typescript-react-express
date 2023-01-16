import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, signUp, login, logout } from "../../api";
import config from "../../config/config.json";
type InitialState = {
  user: User;
  status: "idle" | "pending" | "fulfilled" | "rejected";
  checkJwtStatus: "idle" | "pending" | "fulfilled" | "rejected";
};
const apiUrl = config.apiUrl;

const initialState: InitialState = {
  user: { email: "", lastName: "" },
  status: "idle",
  checkJwtStatus: "idle",
};

export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async (data: User): Promise<User[]> => {
    const response = await signUp(`${apiUrl}/sign-up`, data);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: User): Promise<{ user: User }> => {
    const response = await login(`${apiUrl}/login`, data);
    console.log(response.data);

    return response.data;
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (): Promise<{ user: User }> => {
    const response = await logout(`${apiUrl}/logout`);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload[0];
        const lastName = action.payload[0].lastName;
        if (typeof lastName === "string") {
          localStorage.setItem("lastName", lastName);
        }
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload.user;
        const lastName = action.payload.user.lastName;
        if (typeof lastName === "string") {
          localStorage.setItem("lastName", lastName);
        }
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default authSlice.reducer;
