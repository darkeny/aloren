import { deleteUserArgs, findUsersQuery, saveUserArgs, updateUserArgs, User, userRepository } from "./types";

export class userRepo implements userRepository{
    save(params: saveUserArgs): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(params: deleteUserArgs): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(params: updateUserArgs): Promise<User> {
        throw new Error("Method not implemented.");
    }
    find(query: findUsersQuery): Promise<User> {
        throw new Error("Method not implemented.");
    }

}