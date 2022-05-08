import { SearchProps } from "@/types/search";

export const assembleShopSearchLink = (searchProps: SearchProps) => {
    let link = "/shop?";

    for(let key in searchProps){
        if(searchProps[key]){
            link += key + "=" + searchProps[key] + "&";
        }
    }

    return link;
}

/**
 * Function that finds and returns ALL fields, which keys match the condition
 * @param data data array of type `T` which containts the list to search in 
 * @param conditions is an object of conditions
 */
export const filterList = <T>(data: Array<T>, conditions: SearchCondition<T>) => {}

/**
 * Function that finds and returns ONE single field, which keys match the condition (if there's more than one, returns the first)  
 * @param {Array<T>} data array of type `T` which containts the list to search in 
 * @param {SearchCondition<T>} conditions is an object of conditions
 */
export const findOne = <T>(data: Array<T>, conditions: SearchCondition<T>) => {}