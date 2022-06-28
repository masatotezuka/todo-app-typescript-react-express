import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, signUp, login, checkJwtToken, fetchUserData } from "../../api";
import config from "../../config/config.json";
type InitialState = {
  user: User;
  isLoggedIn: boolean;
  jwtToken: string;
  status: "idle" | "pending" | "fulfilled" | "rejected";
  checkJwtStatus: "idle" | "pending" | "fulfilled" | "rejected";
};
const apiUrl = config.apiUrl;

const initialState: InitialState = {
  user: { email: "", lastName: "" },
  isLoggedIn: false,
  jwtToken: "",
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
  async (data: User): Promise<{ user: User; jwtToken: string }> => {
    const response = await login(`${apiUrl}/login`, data);
    return response.data;
  }
);

export const checkUserJwtToken = createAsyncThunk(
  "auth/checkToken",
  async (): Promise<{ jwtToken: string }> => {
    const response = await checkJwtToken(`${apiUrl}/check-jwt-token`);
    console.log(response.data);
    return response.data;
  }
);

export const fetchUserInfo = createAsyncThunk(
  "auth/fetchUserInfo",
  async (): Promise<User[]> => {
    const response = await fetchUserData(`${apiUrl}/auth/user`);
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
        state.jwtToken = action.payload.jwtToken;
        const lastName = action.payload.user.lastName;
        if (typeof lastName === "string") {
          localStorage.setItem("lastName", lastName);
        }
      })
      .addCase(checkUserJwtToken.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.checkJwtStatus = "fulfilled";
        state.isLoggedIn = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.user = action.payload[0];
      });
  },
});

export default authSlice.reducer;
