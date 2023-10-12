import Joi from 'joi';
import { SignInOrCreateUser } from '../protocols';


export const signInSchema = Joi.object<SignInOrCreateUser>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
