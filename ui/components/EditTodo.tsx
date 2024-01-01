"use client";
import { edit } from "@/app/actions/todoActions";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { ChangeEvent } from "react";
import { BiEdit } from "react-icons/bi";

interface todoType {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title || "");

  const handleEdit = () => {
    todo.isCompleted ? "return" : setEditTodo(!editTodo);
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
    // Add any other logic you need when the title changes
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={handleEdit}
        text={<BiEdit color="white" fontSize="1.2rem" />}
        actionButton
        className="bg-transparent w-auto px-0"
      />

      {editTodo ? (
        <Form onSubmit={handleSubmit} action={edit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex z-20 justify-center absolute left-0 top-0 w-full h-full">
            <Input
              type="text"
              name="newTitle"
              value={editedTitle}
              className="w-full rounded-r-2xl px-5"
              onChange={handleTitleChange}
            />

            <div className="absolute flex justify-end gap-5 bottom-2 right-2">

            <Button
              onClick={handleEdit}
              text="Cancel"
              actionButton
              className=" h-10 px-4 rounded-r-full rounded-l-full"
              />

            <Button
              type="submit"
              text="Save"
              className="h-10 px-4 rounded-r-full rounded-l-full"
              />
              </div>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
