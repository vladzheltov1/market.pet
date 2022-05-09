import { Price, ProductID } from "./products";
import { UserID } from "./user";

export type PurchaseID = number;

export enum DeliveryState {
    CANCELLED,
    PENDING,
    IN_PROGRESS,
    IN_POST_OFFICE,
    SHIPPED,
    REFUNDED
} 

export type Purchase = {
    id: PurchaseID,
    userId: UserID,
    productId: ProductID,
    amount: number,
    price: Price,
    paid: Price,
    date: Date,
    deliveryState: DeliveryState
}