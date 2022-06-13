import { TABLES } from "../constants/tables";
import { FilterCondition } from "../types/filter";
import { Tables } from "../types/tables";
import { filterList } from "./filter";

/**
 * Function that returns all data, which matches condition, from a table
 * @param {Tables} table 
 * @param {object} conditions
 * @returns {Array<object> | []} data from database
 */
const select = (table: keyof typeof Tables, conditions?: FilterCondition): Array<object> | [] => {
    return filterList(TABLES[table], conditions ? conditions : {});
}

export {
    select
};
