import { Category } from "./products";

export type SearchProps = {
    query?: string,
    category?: keyof typeof Category | [keyof typeof Category][],
}