import React from "react";
import CurrentDate from "@/ui/components/CurrentDate";
import TodoInput from "@/ui/components/TodoInput";
import Todo from "@/ui/components/Todo";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      isCompleted: true,
      title: true,
      color:true
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <>
      <div className="w-full min-h-full bg-green-200 absolute top-0 left-0 -z-0 pb-20 pt-5">
      <div className="w-4/5 z-10 pt:30 md:pt-60 mx-auto flex flex-wrap gap-5 md:gap-10 justify-center">
          {data.map((todo, id) => (
            <div className="w-full md:w-[25%] h-40" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="absolute bg-yellow-300 h-44 md:h-56 w-full top-0 left-0 -z-0 rounded-b-[50px] flex justify-center pt-24 md:pt-36 shadow-sm drop-shadow-xl">
          <TodoInput />
        </div>

      </div>
      <div className="absolute text-white left-5 top-5  w-full flex justify-between px-20">
        <p className="font-medium text-xl drop-shadow-md bg-white px-4 py-1 rounded-full text-yellow-500">
        Gaurav Shrestha
        </p>
        <CurrentDate className="font-medium text-xl drop-shadow-md bg-white px-4 py-1 rounded-full text-yellow-500 hidden md:block"/>
      </div>
    </>
  );
};

export default Home;
