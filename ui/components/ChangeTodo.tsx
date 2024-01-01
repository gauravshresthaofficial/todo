import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { changeStatus } from "@/app/actions/todoActions";

interface todoType {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}

interface ChangeTodoProps {
  todo: todoType;
  className?: string;
}

const ChangeTodo = ({ todo ,className} : ChangeTodoProps) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button
        actionButton
        className={`bg-transparent px-0 ${className}`}
        type="submit"
        text={<AiOutlineCheckCircle color="white" fontSize="1.2rem" />}
      />
    </Form>
  );
};

export default ChangeTodo;
