// lib/prisma.js

import { PrismaClient } from "@prisma/client";

// Ensure the Prisma Client is only instantiated once in development
// to prevent "too many connections" issues with Next.js hot reloading.

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Check for global definition (Next.js best practice)
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;