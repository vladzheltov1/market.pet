import { Product } from "@/shared/types/products";

export type UserID = number; 

export enum UserRoles {
    USER,
    MODERATOR,
    ADMIN,
    OWNER
}

export type CartItem = {
    product: Product,
    amount: number
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
    cart: Array<CartItem>
}