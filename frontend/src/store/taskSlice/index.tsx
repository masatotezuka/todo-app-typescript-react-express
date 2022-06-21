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
    return response.data;
  }
);

export const changeUserTodoStatus = createAsyncThunk(
  "todo/changeTodoStatus",
  async ({ id, completedAt }: { id: number; completedAt: Date }) => {
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
  async (todo: Todo) => {
    const response = await updateTodo(`${apiUrl}/updateTodo`, todo);
    //ここで型定義
    return response.data;
  }
);

export const toggleArchiveUserTodo = createAsyncThunk(
  "todo/archiveTodo",
  async ({ id, archivedAt }: { id: number; archivedAt: Date | null }) => {
    const response = await toggleArchiveTodo(
      `${apiUrl}/toggleArchiveTodo`,
      id,
      archivedAt
    );
    return response.data;
  }
);

// export const activeUserTodo = createAsyncThunk(
//   "todo/activeTodo",
//   async (id: number) => {
//     const response = await activeTodo(`${apiUrl}/activeTodo`, id);
//     return response.data;
//   }
// );

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
          (todo) => todo.id === action.payload[0].id
        );
        state.todos[index].completedAt = action.payload[0].completedAt;
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
