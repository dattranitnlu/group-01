export interface IUsersManagement {
    error: number,
    data: [UsersManagement];
}
export interface IUsersManagement {
    error: number,
    user: UsersManagement;
}

export interface UsersManagement {
    id: number;
    username: string;
    password: string;
    fullname: string;
    identitycard: string;
    birthday: string;
    sex: boolean;
    address: string;
    status: boolean;
    usertypeid: number;
}
