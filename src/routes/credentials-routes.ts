import { Router } from "express";
import { createCredential, deleteCredentialById, getUserCredentials } from "../controllers/credentials-controllers";


const credentialsRouter = Router()

credentialsRouter
    .post("/credentials", createCredential)
    .get("/credentials", getUserCredentials)
    .delete("/credentials/:id", deleteCredentialById)


export default credentialsRouter