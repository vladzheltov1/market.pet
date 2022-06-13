import { isArray } from "./array";
import { isObject } from "./object";

/**
 * Check if the given value can be converted to number
 * @returns true if the value can be converted to number
 */
export const isNumber = (value: any) => !isNaN(Number(value)) && value !== "" && !isObject(value) && !isArray(value);