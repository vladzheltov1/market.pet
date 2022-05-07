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

export type SearchCondition<T> = {
    [key in keyof T]: string | number
}

export const filterList = <T>(data: Array<T>, conditions: SearchCondition<T>) => {
    
}

export const findOne = <T>(data: Array<T>, condition: SearchCondition<T>) => {
    const result = data.map(item => {
        let flag = true;
        for(let key in condition){
            if(item[key] !== condition[key]){
                flag = false;
            }
        }
        if(flag){
            return item;
        }
    });

    return result;
}