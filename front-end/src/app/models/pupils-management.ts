export interface IPupilsManagement {
    error: number,
    data: [PupilsManagement];
}
export interface IPupilsManagement {
    error: number,
    user: PupilsManagement;
}

export interface PupilsManagement {
    id: number;
    fullname: string;
    identitycard: string;
    school: string;
    phone: string;
    code: string;
    username: string;
    password: string;
}
