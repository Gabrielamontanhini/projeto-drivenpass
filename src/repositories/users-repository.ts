import prisma from "../database/database-connection"


async function insertOne(email, password) {
    return await prisma.user.create({
       data: {
        email, 
        password
       }
    })
     
}

export const userRepository = { insertOne }