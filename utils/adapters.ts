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
    if(value[0] !== "{" || value[value.length - 1] !== "}" || value.length === 0){
        return {};
    }

    const tempArray = value.split(",");

    let properties = {}; 

    const serviceChars = ["{", "}", ":"]

    const excludeKey = [...serviceChars, '"', "'", "`", " "];
    const excludeValue = [...serviceChars, '"', "'", "`", " "];

    const normalize = (value: string, excludeList: Array<string>): string | number => {
        let result = "";

        for(let char of value){
            if(!excludeList.includes(char)){
                result += char;
            }
        }

        if(excludeList === excludeValue){
            if(!isNaN(Number(result))){
                return Number(result);
            }
            return result;
        }

        return result;
    }

    for(let item of tempArray){
        const [key, value] = item.split(":");

        if(!value){
            return {};
        }

        const normalizedKey = normalize(key, excludeKey);
        const normalizedValue = normalize(value, excludeValue);

        // FIXME
        // @ts-ignore
        properties[normalizedKey] = normalizedValue;
    }

    return properties;
}