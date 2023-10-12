import { Request , Response } from "express";
import httpStatus from "http-status";
import { usersService } from "../services/users-services";


export async function createUser(req:Request, res: Response){
    const {email, password} = req.body
    const createdUser = await usersService.createUser(email, password)
    res.status(httpStatus.CREATED).send(createdUser);
    
}