export interface User {
    readonly id: string;
    readonly name: string;
    readonly email: string;
}

export interface saveUserArgs {
    readonly name: string;
    readonly email: string;
}

export interface deleteUserArgs {
    readonly id: string
}

export interface updateUserArgs {
    readonly id: string;
}

export interface findUsersQuery {
    readonly id: string;
}

export interface userRepository {
    save(params: saveUserArgs): Promise<User>
    delete(params: deleteUserArgs): Promise<User>
    update(params: updateUserArgs): Promise<User>
    find(query: findUsersQuery): Promise<User>
}