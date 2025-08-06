import { PrismaClient } from '@/generated/prisma';
import 'dotenv/config';

const globalForPrisma = globalThis as unknown as {
  db: PrismaClient;
};

export const db =
  globalForPrisma.db ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['info', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.db = db;
}
