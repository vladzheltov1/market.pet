import { templateProducts } from "@/database/products";
import { category_ru } from "@/dictionary/categories";
import { AutoCompleteItem, Match } from "@/types/autoComplete";
import { Product } from "@/types/products";

const makeAutoCompleteItem = (value: string | Product, match: Match): AutoCompleteItem => {
    return { value, match };
}

/**
 * Function that returns autoComplete list for search in header
 * @param {string} fieldValue user query 
 * @returns {Array<AutoCompleteItem} autoCompleteList
 */
export const getAutoCompleteList = (fieldValue: string): Array<AutoCompleteItem> => {
    const autoCompleteList: Array<AutoCompleteItem> = [];

    // Look through default category names
    Object.values(category_ru).map(value => {
        if(value.toLowerCase().includes(fieldValue.toLowerCase())){
            autoCompleteList.push(makeAutoCompleteItem(value.toLowerCase(), Match.exact));
        }
    });

    // Look through products in "database"
    templateProducts.forEach(product => {
        if(product.title.toLowerCase().includes(fieldValue.toLowerCase()) 
        || product.description.toLowerCase().includes(fieldValue.toLowerCase()))
        {
            autoCompleteList.push(makeAutoCompleteItem(product, Match.part));
        }
    });

    return autoCompleteList;
}