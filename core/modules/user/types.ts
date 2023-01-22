export interface User {
    readonly id: string;
    readonly name: string;
    readonly email: string;
}
export interface deleteUserArgs {
    readonly id: string
}
export interface updateUserArgs {
    readonly id: string
}
export interface saveUserArgs {
    readonly id: string
}
export interface findUsersQuery {
    readonly id: string
}
export interface UserFactory {
    create(params: User): User
}
export interface userRepository {
    save(params: saveUserArgs): Promise<User>
    delete(params: deleteUserArgs): Promise<User>
    update(params: updateUserArgs): Promise<User>
    find(query: findUsersQuery): Promise<User>
}