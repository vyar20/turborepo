import 'dotenv/config';
export * from '../generated/prisma';
import { PrismaClient } from '../generated/prisma';

const globalForPrisma = global as unknown as { db: PrismaClient };

export const db =
  globalForPrisma.db ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.db = db;
