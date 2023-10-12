import prisma from 'database/database-connection';

export async function cleanDB() {
    await prisma.session.deleteMany({});
    await prisma.credential.deleteMany({});
    await prisma.user.deleteMany({});
}


/*export async function generateValidToken(user?: User) {
    const incomingUser = user || (await createUser());
    const token = jwt.sign({ userId: incomingUser.id }, process.env.JWT_SECRET);
  
    await createSession(token);
  
    return token;
  }*/