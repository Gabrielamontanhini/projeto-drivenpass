import { SignInOrCreateUser, SignInResult } from "../protocols";
import jwt from 'jsonwebtoken';
import { authRepository } from "../repositories/auth-repository";
import { userRepository } from "../repositories/users-repository";
import { invalidCredentialsError } from "../errors/invalid-credentials-error";


async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await authRepository.createSession({
      token,
      userId,
    });
  
    return token;
  }

  async function getUserOrFail(email: string){
    const user = await userRepository.findUnique(email);
    if (!user) throw invalidCredentialsError();
  
    return user;
  }
  


async function signIn(params: SignInOrCreateUser): Promise<SignInResult> {
    const { email, password } = params;
  
   const user = await getUserOrFail(email);
  
   // await validatePasswordOrFail(password, user.password);
  
    const token = await createSession(user.id);
  
    return {
        userId: user.id,
      userEmail: user.email,
      token,
    };
  }

export const authService = {signIn}