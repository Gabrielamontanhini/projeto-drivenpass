import prisma from "../database/database-connection";
import { CreateSession } from "../protocols";

async function createSession(data: CreateSession) {
    return prisma.session.create({
      data,
    });
  }

  async function findSession(token: string) {
    return prisma.session.findFirst({
      where: {
        token,
      },
    });
  }

  export const authRepository = {createSession, findSession}