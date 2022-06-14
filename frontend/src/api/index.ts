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
