// export interface ICustomerTypes {
//     // tra ve danh sach
//     errorCode: number;
//     data: [CustomerType];
// }
// export interface ICustomerType {
//     // tra ve doi tuong
//     errorCode: number;
//     data: CustomerType;
// }
export interface CustomerType {
    // doi tuong
    id: number;
    name: string;
    commission: number;
}
// model la mot interface
// ng g c la component
// ng g i la tao interface
// ng g s la tao services
// ng for la vong lap
// ng g c views/customer-type/customer-type-edit --flat tao 4 file component cung trong 1 thu muc
