import { SearchCondition } from "@/types/search";

/**
 * Function that finds and returns ALL fields, which keys match the condition
 * @param data data array of type `T` which containts the list to search in 
 * @param conditions is an object of conditions
 */
export const filterList = <T>(data: Array<T>, conditions: keyof T): Array<T> => {    
    return data.filter(item => {
        let fieldsMatch: boolean = true;
        Object.keys(conditions).map(key => {
            if(conditions[key as keyof typeof conditions] !== item[key as keyof typeof item]){
                fieldsMatch = false;
            }
        });

        // The item matches the conditions
        if(fieldsMatch) return item;
    });
}

/**
 * Function that finds and returns ONE single field, which keys match the condition (if there's more than one, returns the first)  
 * @param {Array<T>} data array of type `T` which containts the list to search in 
 * @param {SearchCondition<T>} conditions is an object of conditions
 */
export const findOne = <T>(data: Array<T>, conditions: keyof T): T | null => {
    return filterList<T>(data, conditions)[0] || null;
}