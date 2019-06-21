
export interface UserRole{
    id?:number;
    name:string;
}

export interface User{
    id?:number;
    firstname:string;
    lastname:string;
    username?:string;
    email:string;
    password?:string;
    dateofbirth:Date;
    role_id?: number;
}