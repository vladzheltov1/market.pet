export enum Tables {
    USERS = "USERS",
    PRODUCTS = "PRODUCTS",
    PURCHASES = "PURCHASES"
}

export type TablesContent = {
    [key in keyof typeof Tables]: Array<any>
}