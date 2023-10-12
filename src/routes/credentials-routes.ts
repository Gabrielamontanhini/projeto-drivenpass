import { Router } from "express";
import { createCredential, deleteCredentialById, getUserCredentials } from "../controllers/credentials-controllers";
import { validateBody } from "../middlewares/validation-middleware";
import { createCredentialSchema } from "../schemas/credential-schema";


const credentialsRouter = Router()

credentialsRouter
    .post("/credentials", validateBody(createCredentialSchema),createCredential)
    .get("/credentials", getUserCredentials)
    .delete("/credentials/:id", deleteCredentialById)


export default credentialsRouter