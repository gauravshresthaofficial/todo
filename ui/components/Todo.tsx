import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import ChangeTodo from "./ChangeTodo";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

interface todoType {
  id: string;
  title?: string | null;
  color?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}

const Todo = async ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted ? 0.5 : 1,
    backgroundColor: todo.color || undefined,
    
  };
  return (
    <div
      style={{  ...todoStyle }}
      className="relative flex flex-col-reverse md:flex-col justify-between w-full rounded-2xl h-full drop-shadow-md"
    >
      <div className="flex justify-around py-2 md:border-b-2 border-white w-full border-t-2 md:border-t-0">
        <DeleteTodo todo={todo} />
        <EditTodo todo={todo} />
        {/* <div className="absolute right-0 top-0"> */}
        <ChangeTodo todo={todo} className="" />
        {/* </div> */}
      </div>
      <h3 className="flex-grow font-semibold md:py-2 p-3 overflow-hidden text-[#063970] drop-shadow-sm">
        {todo.title}
      </h3>
    </div>
  );
};

export default Todo;
