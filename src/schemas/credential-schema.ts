import Joi from 'joi';
import { CreateCredential } from '../protocols';



export const createCredentialSchema = Joi.object<CreateCredential>({
    user: Joi.number().required(),
    credIdentifier: Joi.string().required(),
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password: Joi.string().min(3).required(),
});


