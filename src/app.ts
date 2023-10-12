import express, { json, Express } from 'express';
import dotenv from 'dotenv';
import router from './routes/index-routes';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';
import loadEnv from 'config/envs';
import { connectDb, disconnectDB } from 'database/database-connection';



dotenv.config()

loadEnv();
const app = express()
app.use(json())
app.use(express.json())
app.get('/health', (_req, res) => res.send('OK!'))
app.use(handleApplicationErrors);


app.use(router)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
  }
  
  export async function close(): Promise<void> {
    await disconnectDB();
  }
  
export default app



