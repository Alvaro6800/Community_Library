import userRepository from "../repositores/userRepositories.js";

async function createUserService(newUser){
    const user = await userRepository.createUserRepository(newUser)

    return user;
}

export default{
    createUserService
}