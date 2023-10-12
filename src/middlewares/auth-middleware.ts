import { unauthorizedError } from "../errors/unauthorized-error";
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import { authRepository } from "../repositories/auth-repository";


export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw unauthorizedError();
  
    const token = authHeader.split(' ')[1];
    if (!token) throw unauthorizedError();
  
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
  
    const session = await authRepository.findSession(token);
    if (!session) throw unauthorizedError();
  
    req.userId = userId;
    next();
  }
  


export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};
