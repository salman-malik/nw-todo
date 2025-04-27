import { PrismaClient } from '@prisma/client';
import { Priority } from '../app/types/todo';

const prisma = new PrismaClient();

async function main() {
  // Delete existing data
  await prisma.todo.deleteMany({});

  // Create sample todos
  await prisma.todo.create({
    data: {
      title: 'Complete the to-do app',
      description: 'Finish building the NerdWallet to-do application',
      priority: Priority.HIGH,
    },
  });

  await prisma.todo.create({
    data: {
      title: 'Add dark mode support',
      description: 'Implement a toggle for switching between light and dark themes',
      priority: Priority.MEDIUM,
    },
  });

  await prisma.todo.create({
    data: {
      title: 'Test all features',
      description: 'Ensure all features work as expected before submitting',
      priority: Priority.LOW,
      isCompleted: true,
    },
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 