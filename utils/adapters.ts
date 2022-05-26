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

    let props = {};

    const array = value.split(",");

    for(let items in array){
        props = Object.assign({...(normalize(items)), ...props})
    }

    return props;
}

const normalize = (string: string): string => {
    let normalizedString = "{";

    const serviceChars = ["{", "}", ","];

    for(let i = 0; i < string.length; i++){
        const char = string[i];
        if(!serviceChars.includes(char)){
            normalizedString += char;
        }
    }

    normalizedString += "}";

    return normalizedString;
}