import { Product } from "./products";

export type UserID = number; 

export enum UserRoles {
    USER,
    MODERATOR,
    ADMIN,
    OWNER
}

export type User = {
    id: UserID,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    joined: Date,
    role: UserRoles,
    avatar: string,
    wishList: Array<Product>,
    cart: Array<Product>
}