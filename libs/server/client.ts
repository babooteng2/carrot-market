import { PrismaClient } from "@prisma/client";

/* export default new PrismaClient(); */

declare global {
  var client: PrismaClient | undefined;
}

// const client = global.client || new PrismaClient({ log: ["query"] });
const client = global.client || new PrismaClient();

if (process.env.NODE_ENV === "development") global.client = client;

export default client;
