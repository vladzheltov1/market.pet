import { Category } from "./products"

export type SearchProps = {
    title: string,
    category: keyof typeof Category,
}