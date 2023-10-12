import prisma from "../database/database-connection"

async function insertOne(data:any) {
    return await prisma.credential.create({
      data  
    })
}

async function findAll(userId:any) {
    const credentials = await prisma.credential.findMany({
        where:{
            id: userId
        }
    })
}

async function deleteOne(credentialId: any) {
    return await prisma.credential.delete({
        where:{
            id: credentialId
        }
    })
}

export const credentialsRepository = {
    insertOne , findAll , deleteOne
}