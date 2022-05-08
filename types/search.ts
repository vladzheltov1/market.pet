export type SearchQuery = {
    [key: string]: string | number | Array<string | number>
}

export type SearchCondition<T> = {
    [key in keyof T]: string | number
}