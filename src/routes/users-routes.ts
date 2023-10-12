import { Router } from "express";
import { createUser } from "../controllers/users-controllers";


const usersRouter = Router()

usersRouter.post("/user", createUser)



export default usersRouter