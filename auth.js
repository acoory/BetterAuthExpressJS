import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  basePath: "/api/auth",
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "sqlite", ...etc
  }),
});
