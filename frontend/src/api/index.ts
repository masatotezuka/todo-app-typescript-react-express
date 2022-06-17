import axios from "axios";

export type Todo = {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  status: boolean;
};

export const createTodo = async (
  apiUrl: string,
  data: { title: string; description: string; deadline: Date }
) => {
  const res = await axios.post(apiUrl, data);
  return res;
};

export const fetchTodo = async (apiUrl: string) => {
  const res = await axios.get(apiUrl);
  return res;
};

export const deleteTodo = async (apiUrl: string, id: number) => {
  const res = await axios.delete(apiUrl, { data: { todoId: id } });
  return res;
};

export const changeTodoStatus = async (
  apiUrl: string,
  id: number,
  status: boolean
) => {
  const res = await axios.put(apiUrl, {
    data: { todoId: id, todoStatus: status },
  });
  return res;
};

export const updateTodo = async (apiUrl: string, data: Todo) => {
  const res = await axios.put(apiUrl, { data: data });
  return res;
};
