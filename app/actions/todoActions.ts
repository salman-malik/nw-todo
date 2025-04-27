'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../lib/db';
import { TodoFormData } from '../types/todo';

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: [
        { priority: 'desc' },
        { createdAt: 'desc' }
      ]
    });
    return { todos };
  } catch (error: unknown) {
    console.error('Failed to fetch todos:', error);
    if (error instanceof Error && error.message.includes("Can't reach database server")) {
      return { error: 'Database connection error. Please check your database settings.' };
    }
    return { error: 'Failed to fetch todos' };
  }
}

export async function addTodo(data: TodoFormData) {
  try {
    await prisma.todo.create({
      data: {
        title: data.title,
        description: data.description || '',
        priority: data.priority,
      }
    });
    revalidatePath('/');
    return { success: true };
  } catch (error: unknown) {
    console.error('Failed to create todo:', error);
    if (error instanceof Error && error.message.includes("Can't reach database server")) {
      return { error: 'Database connection error. Please check your database settings.' };
    }
    return { error: 'Failed to create todo' };
  }
}

export async function updateTodo(id: string, data: Partial<TodoFormData>) {
  try {
    await prisma.todo.update({
      where: { id },
      data
    });
    revalidatePath('/');
    return { success: true };
  } catch (error: unknown) {
    console.error('Failed to update todo:', error);
    if (error instanceof Error && error.message.includes("Can't reach database server")) {
      return { error: 'Database connection error. Please check your database settings.' };
    }
    return { error: 'Failed to update todo' };
  }
}

export async function deleteTodo(id: string) {
  try {
    await prisma.todo.delete({
      where: { id }
    });
    revalidatePath('/');
    return { success: true };
  } catch (error: unknown) {
    console.error('Failed to delete todo:', error);
    if (error instanceof Error && error.message.includes("Can't reach database server")) {
      return { error: 'Database connection error. Please check your database settings.' };
    }
    return { error: 'Failed to delete todo' };
  }
}

export async function toggleTodoCompletion(id: string, isCompleted: boolean) {
  try {
    await prisma.todo.update({
      where: { id },
      data: { isCompleted }
    });
    revalidatePath('/');
    return { success: true };
  } catch (error: unknown) {
    console.error('Failed to update todo completion status:', error);
    if (error instanceof Error && error.message.includes("Can't reach database server")) {
      return { error: 'Database connection error. Please check your database settings.' };
    }
    return { error: 'Failed to update todo completion status' };
  }
} 