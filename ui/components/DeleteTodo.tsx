import React from 'react'
import {MdOutlineDeleteOutline} from "react-icons/md"
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
          <Button actionButton className='bg-transparent w-auto px-0 py-0 my-0 opacity-75' type="submit" text={<MdOutlineDeleteOutline color="#154c79" fontSize="1.5rem"/>}/>
      </Form>
    )
  }

export default DeleteTodo