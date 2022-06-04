import { OBJECT_PARSE_EXCLUDE_CHARS } from "@/constants/parsers";


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

    // A helper function, that removes the exclude-chars from the given string 
    const normalize = (value: string): string | number => {
        const result = value.split("")
                            .filter(char => !OBJECT_PARSE_EXCLUDE_CHARS.includes(char) && char)
                            .join("");

        // The result might be a number, so we need to convert it to type number 
        return !isNaN(Number(result)) ? Number(result) : result;
    }
    
    let properties = {}; 
    
    // Iterating through the array of strings like "key: value" and parsing values and keys
    value.split(",").forEach(keyValueString => {
        const [key, value] = keyValueString.split(":");

        if(!value) return;

        properties = Object.assign({...properties, [normalize(key)]: normalize(value)});
    });

    return properties;
}