import { db } from '@repo/db';

export const GET = async () => {
  console.log(db);

  return new Response('Hello from the test route!');
};
