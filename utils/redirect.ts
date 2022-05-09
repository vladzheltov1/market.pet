import { SearchQuery } from "@/types/search";
import { NextRouter } from "next/router";

/**
 * Function that assembles the URL with query params
 * @param {string} path base URL 
 * @param {SearchQuery} query query params 
 * @example
 * ```
 * const url = assembleLink("/shop", {title: "iphone", category: "phone"});
 * console.log(url) -> "/shop?title=iphone&category=phone"
 * ```
 * @returns {string} URL
 */
 export const assembleLink = (path: string, query: SearchQuery): string => {
    const filterSize = Object.keys(query).length;
    
    let searchLink = path;
    
    if(filterSize !== 0){
        searchLink += "?";
    }
    
    Object.keys(query).map((key, index) => {
        searchLink += `${key}=${query[key]}${index === filterSize - 1 ? "" : "&"}`;
    });
    
    return searchLink;
}

/**
 * @param {string} url 
 * @param {NextRouter} router 
 * @returns {Promise<boolean>}
 */
export const redirect = (url: string, router: NextRouter): Promise<boolean> => router.push(url);