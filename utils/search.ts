import { SearchProps } from "@/types/search";

export const assembleSearchLink = (searchProps: SearchProps) => {
    let link = "/search?query=";

    if(searchProps.title){
        link += searchProps.title;
    }
    if(searchProps.category){
        link += "&category=" + searchProps.category;
    }

    return link;
}