import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/index-routes';

dotenv.config()
const app = express()
app.use(express.json())


app.use(router)
export default app



/** o que tem que fazer:
 * validar dados de entrada:
 *           na criação do usuario: criar objetos
 *                                  precisa ter o fomrato email e senha 
 *                                  email precisa ser válido e único 
 *                                  senha precisa ter pelo menos 10 caracteres
 *           na criação de credencial: a credencial precisa ter o formato url, nome de usuario, senha e um titulo
 *                                     o titulo deve ser unico
 */