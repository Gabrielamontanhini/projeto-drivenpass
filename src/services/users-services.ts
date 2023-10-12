import { userRepository } from "../repositories/users-repository";
import bcrypt from 'bcrypt'

async function createUser(email, password){
   // const hashedPassword = await bcrypt.hash(password, 12);

    return userRepository.insertOne(email,password)
}

export const usersService = { createUser }