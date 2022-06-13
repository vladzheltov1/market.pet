/**
 * Function that finds and returns ALL fields, which keys match the condition
 * @param data data array which containts the list to search in 
 * @param conditions an object of conditions
 */
export const filterList = (data: Array<object>, conditions: object): Array<object> | [] => {    
    return data.filter(item => {
        let fieldsMatch: boolean = true;
        Object.keys(conditions).map(key => {
            if(!Object.hasOwn(item, key)){
                throw new Error(`Key ${key} was not found!`);
            }
            if(conditions[key as keyof typeof conditions] !== item[key as keyof typeof item]){
                fieldsMatch = false;
            }
        });

        if(fieldsMatch) return item;
    });
}

/**
 * Function that finds and returns ONE single field, which keys match the condition (if there's more than one, returns the first)  
 * @param {Array<T>} data array which containts the list to search in 
 * @param {SearchCondition<T>} conditions is an object of conditions
 */
export const findOne = (data: Array<object>, conditions: object): object | null => {
    return filterList(data, conditions)[0] || null;
}