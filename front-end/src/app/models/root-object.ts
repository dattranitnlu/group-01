import { Page } from './page';

export interface RootObject<T> {
        errorCode: number;
        data: T;
        message: string;
        pageInfo: Page;
}
