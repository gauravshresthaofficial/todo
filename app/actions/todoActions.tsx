"use server";

// Import PrismaClient
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Initialize PrismaClient
const prisma = new PrismaClient();

// Your create function
export async function create(formData: FormData) {
  const colors = [
    "#ffbe86",
    "#ffd06e",
    "#ffe156",
    "#ffe9ce",
    "#ffcfc8",
    "#ffb5c2",
    "#9b96e1",
    "#3777ff",
    "#04080f",
    "#507dbc",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  try {
    const input = formData.get("todoInput") as string;
    if(input === "")
    {
      return;
    }

    // Use createOne for MongoDB
    await prisma.todo.create({
      data: {
        title: input,
        color: randomColor,
      },
    });

    // Assuming revalidatePath is a valid function, call it here
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating todo:", error);
  }
}

export async function changeStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todo.findUnique({
    where: { id: inputId },
  });

  if (!todo) {
    return;
  }

  const updateStatus = !todo?.isCompleted;

  await prisma.todo.update({
    where: { id: inputId },
    data: {
      isCompleted: updateStatus,
    },
  });
  revalidatePath("/");
}
export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  await prisma.todo.update({
    where: { id: inputId },
    data: { title: input },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  await prisma.todo.delete({
    where: { id: inputId },
  });
  revalidatePath("/");
}
