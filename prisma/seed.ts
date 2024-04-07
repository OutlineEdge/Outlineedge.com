import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("xfosoft", 12);
  const user = await prisma.user.upsert({
    where: { email: "admin@xfosoft.net" },
    update: {},
    create: {
      email: "admin@xfosoft.net",
      name: "Xfosoft Admin",
      password,
    },
  });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
