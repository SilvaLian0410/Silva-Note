import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  const prisma = new PrismaClient();

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Database operation timed out")), 30000)
  );

  const queryPromise = prisma.$connect();

  return Promise.race([queryPromise, timeoutPromise]);
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

