import { Request , Response } from "express";
import { credentialsService } from "../services/credentials-services";
import httpStatus from "http-status";

export async function createCredential(req:Request, res: Response) {
    const {url, username, password, credIdentifier} = req.body
    await credentialsService.createCredential(url, username, password, credIdentifier)
    res.sendStatus(httpStatus.CREATED);
}

export async function getUserCredentials(req:Request, res: Response) {
    const {userId} = req.headers
    const credentialsOfUser = await credentialsService.getUserCredentials(userId)
    return res.status(httpStatus.OK).send(credentialsOfUser);
}

export async function deleteCredentialById(req:Request, res: Response)  {
    const {userId} = req.headers
    const {credentialId} = req.params
    await credentialsService.deleteCredentialById(credentialId)
    return res.sendStatus(httpStatus.OK)
}