import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createTodo, Todo } from "../../api";

type InitialState = {
  todos: Todo[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
};

export const createUserTodo = createAsyncThunk(
  "todo/createTodo",
  async (data: Todo) => {
    const response = await createTodo("http://localhost:8000/api/todo", data);
    console.log(response);
    return response.data;
  }
);

const initialState: InitialState = {
  todos: [],
  status: "idle",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserTodo.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(createUserTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        console.log(action.payload);
        state.todos.push(action.payload);
        console.log(state.todos);
      });
  },
});

export default todoSlice.reducer;
