export interface IClassesManagement {
    error: number,
    data: [ClassesManagement];
}
export interface IClassesManagement {
    error: number,
    user: ClassesManagement;
}

export interface ClassesManagement {
    id: number;
    classname: string;
    userid: number;
    lecturer: string;
}
