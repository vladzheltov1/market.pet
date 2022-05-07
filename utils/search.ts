import { SearchProps } from "@/types/search";

export const assembleShopSearchLink = (searchProps: SearchProps) => {
    let link = "/shop?query=";

    if(searchProps.title){
        link += searchProps.title;
    }
    if(searchProps.category){
        link += "&category=" + searchProps.category;
    }

    return link;
}


export const filterList = <T>(data: Array<T>, condition: {[key in keyof T]: string | number}) => {
    
}