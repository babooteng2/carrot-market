import { PrismaClient } from "@prisma/client";

// export default new PrismaClient();
const client = new PrismaClient();

client.user.create({data: {
  name: "babooteng2",
  email: "babooteng2@hanmail.net"
}})