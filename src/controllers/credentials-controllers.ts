import { Request , Response } from "express";
import { credentialsService } from "../services/credentials-services";
import httpStatus from "http-status";
import { CreateCredential } from "../protocols";

export async function createCredential(req:Request, res: Response) {
    const credential = req.body as CreateCredential
    const {userId} = req.headers
    await credentialsService.createCredential(credential, Number(userId) )
    res.sendStatus(httpStatus.CREATED);
}

export async function getUserCredentials(req:Request, res: Response) {
    const {userId} = req.headers
    const credentialsOfUser = await credentialsService.getUserCredentials(Number(userId))
    return res.status(httpStatus.OK).send(credentialsOfUser);
}

export async function deleteCredentialById(req:Request, res: Response)  {
    
    const {credentialId} = req.params
    await credentialsService.deleteCredentialById(Number(credentialId))
    return res.sendStatus(httpStatus.OK)
}