import { CustomerType } from './customer-type';
import { UsersManagement } from './users-management';

export interface RootObject<T> {
    errorCode: number;
    data: [CustomerType];
    user: [UsersManagement];
}
