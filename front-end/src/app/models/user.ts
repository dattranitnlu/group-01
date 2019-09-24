import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { UserType } from './user-type';

export interface User {
    id: number;
    username: string;
    password: string;
    fullname: string;
    identitycard: string;
    birthday: Date;
    sex: boolean;
    address: string;
    status: boolean;
    usertypeid: number;
    usertype: {usertypeid: number, userrole: string};
};
export interface IUser {
    id: number;
    username: string;
    fullname: string;
};

