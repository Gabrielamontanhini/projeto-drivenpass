import { credentialsRepository } from "../repositories/credentials-repository";



async function createCredential(url, username, password, credIdentifier){
return credentialsRepository.insertOne({
    url, username, password, credIdentifier
})
}


async function getUserCredentials(userId: any) {
    return credentialsRepository.findAll(userId)
}

async function deleteCredentialById(credentialId: any) {
    return credentialsRepository.deleteOne(credentialId)
}

export const credentialsService = {createCredential, getUserCredentials, deleteCredentialById}