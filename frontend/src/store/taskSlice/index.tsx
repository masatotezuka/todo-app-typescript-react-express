import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import {
  createTodo,
  fetchTodo,
  deleteTodo,
  changeTodoStatus,
  updateTodo,
  toggleArchiveTodo,
  Todo,
} from "../../api";
import config from "../../config/config.json";

type InitialState = {
  todos: Todo[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
};

const apiUrl = `${config.apiUrl}/todo`;

export const createUserTodo = createAsyncThunk(
  "todo/createTodo",
  async (data: {
    userId: string | undefined;
    title: string;
    description: string;
    deadline: Date;
  }): Promise<Todo> => {
    const response = await createTodo(apiUrl, data);
    return response.data;
  }
);

export const fetchUserTodo = createAsyncThunk(
  "todo/fetchTodo",
  async (userId: string | undefined): Promise<Todo[]> => {
    const response = await fetchTodo(`${apiUrl}/${userId}`);
    return response.data;
  }
);

export const deleteUserTodo = createAsyncThunk(
  "todo/deleteTodo",
  async ({
    id,
    userId,
  }: {
    id: number;
    userId: string | undefined;
  }): Promise<number> => {
    const response = await deleteTodo(apiUrl, id, userId);
    return response.data;
  }
);

export const changeUserTodoStatus = createAsyncThunk(
  "todo/changeTodoStatus",
  async ({
    id,
    completedAt,
  }: {
    id: number;
    completedAt: Date;
  }): Promise<{ id: number; completedAt: Date }> => {
    const response = await changeTodoStatus(
      `${apiUrl}/changeStatus`,
      id,
      completedAt
    );
    return response.data;
  }
);

export const updateUserTodo = createAsyncThunk(
  "todo/updateTodo",
  async (todo: Todo): Promise<Todo[]> => {
    const response = await updateTodo(`${apiUrl}/updateTodo`, todo);
    return response.data;
  }
);

export const toggleArchiveUserTodo = createAsyncThunk(
  "todo/archiveTodo",
  async ({
    id,
    archivedAt,
    userId,
  }: {
    id: number;
    archivedAt: Date | null;
    userId: string | undefined;
  }): Promise<[{ id: number; archivedAt: Date | null }]> => {
    const response = await toggleArchiveTodo(
      `${apiUrl}/toggleArchiveTodo`,
      id,
      archivedAt,
      userId
    );
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
          (todo) => todo.id === action.payload.id
        );
        state.todos[index].completedAt = action.payload.completedAt;
      })
      .addCase(updateUserTodo.fulfilled, (state, action) => {
        const updatedTodo: Todo = action.payload[0];
        state.status = "fulfilled";
        const index = state.todos.findIndex(
          (todo) => todo.id === updatedTodo.id
        );
        state.todos[index] = {
          ...state.todos[index],
          id: updatedTodo.id,
          title: updatedTodo.title,
          description: updatedTodo.description,
          deadline: updatedTodo.deadline,
        };
      })
      .addCase(toggleArchiveUserTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload[0].id
        );
        state.todos[index] = {
          ...state.todos[index],
          id: action.payload[0].id,
          archivedAt: action.payload[0].archivedAt,
        };
      });
  },
});
const todoSelector = (state: RootState) => state.todos.todos;

export const archivedTodoSelector = createSelector(todoSelector, (todos) =>
  todos.filter((todo) => todo.archivedAt)
);

export default todoSlice.reducer;
