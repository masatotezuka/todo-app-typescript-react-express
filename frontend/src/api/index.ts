import axios from "axios";

export type Todo = {
  id?: number;
  title: string;
  description: string;
  deadline: Date;
  status: boolean;
};

export const createTodo = async (apiUrl: string, data: Todo) => {
  const res = await axios.post(apiUrl, data);
  return res;
};
