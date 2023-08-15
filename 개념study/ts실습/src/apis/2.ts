import axios from "axios";

interface AxiosRes<T> {
  statusCode: number,
  errorCode: number,
  message: string,
  result: T
}

export const TodoApi = {
  async getTodo<T>(): Promise<AxiosRes<T>> {
    const res = await axios.get("data/todoMock.json");
    return res.data;
  },
};
