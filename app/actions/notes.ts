'use server'

import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createNote(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Not authorized");
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Database operation timed out")), 30000)
  );

  const dbOperation = prisma.note.create({
    data: {
      userId: user?.id,
      description: description,
      title: title,
    },
  });

  await Promise.race([dbOperation, timeoutPromise]);
  revalidatePath("/dashboard");  
  return redirect("/dashboard");
}

export async function getNoteById(noteId: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Not authorized");
  }

  const data = await prisma.note.findUnique({
    where: {
      id: noteId,
      userId: user.id,
    },
    select: {
      title: true,
      description: true,
      id: true,
    },
  });

  return data;
}

export async function updateNote(noteId: string, title: string, description: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Not authorized");
  }

  await prisma.note.update({
    where: {
      id: noteId,
      userId: user.id,
    },
    data: {
      title,
      description,
    },
  });

  revalidatePath("/dashboard");
  return redirect("/dashboard");
}