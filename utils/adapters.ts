/**
 * Function that adds spaces every 3 symbols for better outlook
 * @example
 * ```
 * priceAdapters(100000) -> "100 000";
 * ```
 * @param {number} priceValue number value of the price
 * @returns {string} normalized price to display
 */
export const addSpacesToPrice = (priceValue: number): string => {
    return priceValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/**
 * Function that takes an object-like string and converts it to an actual object
 * @example
 * ```
 * parseProperties('{"id": 5}') -> { id: 5 }
 * ```
 * @param value 
 */
export const parseProperties = (value: string): object => {
    // Early exit if the given string is not an object-like string
    if(value[0] !== "{" || value[value.length - 1] !== "}" || value.length === 0){
        return {};
    }

    return JSON.parse(value);
}