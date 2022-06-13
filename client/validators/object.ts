import { isArray } from "./array";

export const isObject = (value: any): boolean => (typeof value === "object") && (value !== null) && (Array.isArray(value) === false);

export const isEmptyObject = (object: object): boolean => !isArray(object) && Object.keys(object).length === 0;