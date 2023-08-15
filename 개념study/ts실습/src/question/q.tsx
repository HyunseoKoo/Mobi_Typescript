
import { useEffect, useState } from "react";
import { TodoApi } from "../apis/1";
import { TodoDataBase } from "../types/todo";
import OneTodo from "./components/one-todo";
// import { TodoApi } from "../apis/2"; // 'AxiosRes<unknown>' 형식의 인수는 'SetStateAction<ITodo[]>' 형식의 매개 변수에 할당될 수 없습니다.

const Q1Component = () => {
  const [todo, setTodo] = useState<TodoDataBase[]>([]);

  const getRes = async () => {
    const res = await TodoApi.getTodo();
    console.log(res);
    setTodo(res);
  }

  useEffect(()=> {
    getRes();
  }, [todo]);

  return (
    <>
      {todo && todo.map((el)=> (
        <OneTodo todo={el} />
      ))}
    </>
  );
};
export default Q1Component;
