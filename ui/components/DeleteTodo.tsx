import React from 'react'
import {BsFillTrashFill} from "react-icons/bs"
import Form from './Form';
import Input from './Input';
import Button from './Button';
import { deleteTodo } from '@/app/actions/todoActions';

interface todoType {
    id:string,
    title?:string |null,
    isCompleted: boolean,
    createdAt?: Date
}

const DeleteTodo = ({todo}: {todo : todoType} ) => {
    return (
      <Form action={deleteTodo}>
          <Input name="inputId" value={todo.id} type="hidden"/>
          <Button actionButton className='bg-transparent w-auto px-0' type="submit" text={<BsFillTrashFill color="white" fontSize="1.2rem"/>}/>
      </Form>
    )
  }

export default DeleteTodo