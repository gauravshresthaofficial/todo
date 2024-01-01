import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { create } from "@/app/actions/todoActions";

const AddTodo = () => {
  return (
    <Form action={create} className="w-2/3 flex justify-center h-12">
        <Input name="todoInput" type="text" placeholder="Add Todo..." className="px-5 md:px-10"/>
        <Button type="submit" text="Add" className="px-5 md:px-10"/>
    </Form>
  );
};

export default AddTodo;
