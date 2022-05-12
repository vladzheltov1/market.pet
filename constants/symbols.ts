import { Currency } from "@/types/products";

export const CURRENCY: { [key in keyof typeof Currency]: string } = {
    rouble: "₽",
    dollar: "$",
    euro: "€"
}