import { deleteUserArgs, findUsersQuery, saveUserArgs, updateUserArgs, User, userRepository } from "./types";

export class UserRepo implements userRepository {
    async save(params: saveUserArgs): Promise<User> {
        throw new Error("");

    }
    async delete(params: deleteUserArgs): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async update(params: updateUserArgs): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async find(query: findUsersQuery): Promise<User> {
        throw new Error("Method not implemented.");
    }

}