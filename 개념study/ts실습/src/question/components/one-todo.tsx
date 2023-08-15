import { TodoDataBase, TodoEnum } from "../../types/todo";

const OneTodo = ({todo}:{todo: TodoDataBase}) => {

  return (
    <>
    <div>{todo.type}</div>
    {(todo.type === TodoEnum.DAILY) && (
      <>
        <div>{todo.title}</div>
        <div>{todo.content}</div>
      </>
    )}
    {(todo.type === TodoEnum.WEEKLY) && (
      <>
        <div>{String(todo.total)}</div>
      </>
    )}
    {(todo.type === TodoEnum.MONTHLY) && (
      <>
        <div>{String(todo.goal)}</div>
      </>
    )}
    </>
  )
};
export default OneTodo;
