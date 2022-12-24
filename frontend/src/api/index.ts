import axios from "axios";
axios.defaults.withCredentials = true;

export type Todo = {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  completedAt: Date;
  archivedAt: Date | null;
};

export type User = {
  id?: number;
  firstName?: string;
  lastName?: string;
  email: string;
  password?: string;
};

export type VerificationPassword = {
  password: string;
};

export const fetchTodo = async (apiUrl: string) => {
  const res = await axios.get(apiUrl);
  return res;
};

export const createTodo = async (
  apiUrl: string,
  data: {
    userId: string | undefined;
    title: string;
    description: string;
    deadline: Date;
  }
) => {
  const res = await axios.post(apiUrl, data);
  return res;
};

export const deleteTodo = async (apiUrl: string, id: number) => {
  const res = await axios.delete(apiUrl, { data: { id: id } });
  return res;
};

export const changeTodoStatus = async (
  apiUrl: string,
  id: number,
  completedAt: Date
) => {
  const res = await axios.put(apiUrl, {
    data: { id: id, completedAt: completedAt },
  });
  return res;
};

export const updateTodo = async (apiUrl: string, data: Todo) => {
  const res = await axios.put(apiUrl, { data: data });
  return res;
};

export const toggleArchiveTodo = async (
  apiUrl: string,
  id: number,
  archivedAt: Date | null
) => {
  const res = await axios.put(apiUrl, {
    data: { id: id, archivedAt: archivedAt },
  });
  return res;
};

export const signUp = async (apiUrl: string, data: User) => {
  const res = await axios.post(apiUrl, data);
  return res;
};

export const login = async (apiUrl: string, data: User) => {
  const res = await axios.post(apiUrl, data);
  return res;
};

export const checkJwtToken = async (apiUrl: string) => {
  const res = await axios.get(apiUrl);
  return res;
};

export const logout = async (apiUrl: string) => {
  const res = await axios.post(apiUrl);
  return res;
};

export const requestPasswordReset = async (
  apiUrl: string,
  data: { email: string }
) => {
  axios.post(apiUrl, data);
};

export const verificationPassword = async (
  apiUrl: string,
  data: VerificationPassword
) => {
  await axios.put(apiUrl, { data });
};
