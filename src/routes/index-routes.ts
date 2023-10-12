import { Router } from "express";
import usersRouter from "./users-routes";
import credentialsRouter from "./credentials-routes";

const router = Router()

router.use(usersRouter)
router.use(credentialsRouter)

export default router