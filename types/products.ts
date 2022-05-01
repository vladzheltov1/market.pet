export enum Category {
    phone = "phone",
    tablet = "tablet",
    headphone = "headphone",
    keyboard = "keyboard",
    monitor = "monitor",
    gamestation = "gamestation",
    joystick = "joystick"
}

export enum Currency {
    dollar = "dollar",
    rouble = "rouble",
    euro = "euro"
}

export type Price = {
    value: number,
    currency: Currency
}

export type Product = {
    id: number | string,
    title: string,
    description: string,
    category: Category,
    price: Price
}