import { Request , Response } from "express";
import httpStatus from "http-status";
import { usersService } from "../services/users-services";
import { CreateUser } from "../protocols";


export async function createUser(req:Request, res: Response){
    const user = req.body as CreateUser
    const createdUser = await usersService.createUser(user)
    res.status(httpStatus.CREATED).send(user);
    
}