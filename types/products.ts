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

export type Product = {
    id: number | string,
    title: string,
    description: string,
    category: Category,
    photos: Array<string>,
    price: Price,
    colors: Array<ProductColor>,
    features: Array<ProductFeature>
}