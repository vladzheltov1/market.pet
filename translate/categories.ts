import { Category } from "@/types/products";

export type Dict = {
    [key in Category]: string
}

export const category_ru: Dict = {
    phone: "Смартфоны",
    gamestation: "Консоли",
    headphone: "Наушники",
    joystick: "Джойстики",
    keyboard: "Клавиатуры",
    monitor: "Мониторы",
    tablet: "Планшеты"
}