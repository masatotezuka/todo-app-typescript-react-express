import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createTodo,
  fetchTodo,
  deleteTodo,
  changeTodoStatus,
  Todo,
} from "../../api";

type InitialState = {
  todos: Todo[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
};

const apiUrl = "http://localhost:8000/api/todo";

export const createUserTodo = createAsyncThunk(
  "todo/createTodo",
  async (data: { title: string; description: string; deadline: Date }) => {
    const response = await createTodo(apiUrl, data);
    return response.data;
  }
);

export const fetchUserTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const response = await fetchTodo(apiUrl);
  return response.data;
});

export const deleteUserTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id: number) => {
    const response = await deleteTodo(apiUrl, id);
    console.log(id);

    return response.data;
  }
);

export const changeUserTodoStatus = createAsyncThunk(
  "todo/changeTodoStatus",
  async ({ id, status }: { id: number; status: boolean }) => {
    const response = await changeTodoStatus(apiUrl, id, status);
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

        state.todos.push(action.payload);
      })
      .addCase(fetchUserTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        console.log(action.payload);
        state.todos = action.payload;
      })
      .addCase(deleteUserTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload
        );
        state.todos.splice(index, 1);
      })
      .addCase(changeUserTodoStatus.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload[0].id
        );
        state.todos[index].status = action.payload.status;
      });
  },
});

export default todoSlice.reducer;
