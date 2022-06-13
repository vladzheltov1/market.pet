import { Product } from "./products";

export enum Match {
    exact,
    part
}

export type AutoCompleteItem = {
    match: Match,
    value: string | Product 
}