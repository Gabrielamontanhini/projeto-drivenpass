import { CreateCredential } from "../protocols";
import { credentialsRepository } from "../repositories/credentials-repository";



async function createCredential(credential: CreateCredential, userId: number){

    return credentialsRepository.insertOne(credential, userId)
}


async function getUserCredentials(userId: number) {
    return credentialsRepository.findAll(userId)
}

async function deleteCredentialById(credentialId: number) {
    return credentialsRepository.deleteOne(credentialId)
}

export const credentialsService = {createCredential, getUserCredentials, deleteCredentialById}