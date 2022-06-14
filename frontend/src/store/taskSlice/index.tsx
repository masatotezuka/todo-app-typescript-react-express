import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createTodo, fetchTodo, Todo } from "../../api";

type InitialState = {
  todos: Todo[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
};

const apiUrl = "http://localhost:8000/api/todo";

export const createUserTodo = createAsyncThunk(
  "todo/createTodo",
  async (data: { title: string; description: string; deadline: Date }) => {
    const response = await createTodo(apiUrl, data);
    console.log(response);
    return response.data;
  }
);

export const fetchUserTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const response = await fetchTodo(apiUrl);
  return response.data;
});

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
      })
      .addCase(fetchUserTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        console.log(action.payload);
        state.todos = action.payload;
      });
  },
});

export default todoSlice.reducer;
