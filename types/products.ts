export enum Category {
    phone = "phone",
    tablet = "tablet",
    headphones = "headphones",
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

export type ProductColor = {
    /**
     * HEX/RGB
     */
    colorCode: string
    lable: string,
}

export type ProductFeature = {
    lable: string,
    value: string | Array<string>
}

export type ProductID = number | string;

export type Product = {
    id: ProductID,
    title: string,
    description: string,
    category: Category,
    photos: Array<string>,
    price: Price,
    colors: Array<ProductColor>,
    features: Array<ProductFeature>
}