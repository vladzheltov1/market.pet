export type Dictionary<T extends string | number> = {
    [key in T]: string
}