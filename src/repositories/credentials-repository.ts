import { CreateCredential } from "../protocols"
import prisma from "../database/database-connection"

async function insertOne(credential: CreateCredential, userId: any) {
    return await prisma.credential.create({
      data: {
        user: userId, 
        title: credential.credIdentifier,
        url: credential.url,
        username: credential.username,
        password: credential.password
      }
    })
}

async function findAll(userId:number) {
    const credentials = await prisma.credential.findMany({
        where:{
            id: userId
        }
    })
    return credentials
}

async function deleteOne(credentialId: number) {
    return await prisma.credential.delete({
        where:{
            id: credentialId
        }
    })
}

export const credentialsRepository = {
    insertOne , findAll , deleteOne
}