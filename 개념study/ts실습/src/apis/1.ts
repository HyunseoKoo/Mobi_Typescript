import axios from "axios";
import { TodoDataBase } from "../types/todo";

export const TodoApi = {
  async getTodo() {
   return await axios.get<TodoDataBase[]>("data/todoMock.json").then((res)=>res.data);
  },
};
