import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export interface User {
    id: number;
    username: string;
    password: string;
    fullname: string;
    identitycard: string;
    birthday: NgbDate;
    sex: boolean;
    address: string;
    status: boolean;
    usertypeid: number;
    usertype: {id: number, userrole: string};

}
