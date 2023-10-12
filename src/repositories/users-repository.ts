import { CreateUser } from "../protocols"
import prisma from "../database/database-connection"


async function insertOne(user: CreateUser) {
    const result =  await prisma.user.create({
      data: user
    })
     return result
}

async function findUnique(email: string) {
    return await prisma.user.findUnique({
        where:{ email}
    })
}

export const userRepository = { insertOne , findUnique }