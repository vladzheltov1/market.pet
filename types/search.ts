import { Category } from "./products";

export type SearchProps = {
    query?: string,
    category?: keyof typeof Category | [keyof typeof Category][],
}

export type SearchCondition<T> = {
    [key in keyof T]: string | number
}