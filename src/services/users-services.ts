import { CreateUser } from "protocols";
import { userRepository } from "../repositories/users-repository";
import bcrypt from 'bcrypt'

async function createUser(user: CreateUser){
   // const hashedPassword = await bcrypt.hash(password, 12);

    return user//await userRepository.insertOne(user)
}

export const usersService = { createUser }