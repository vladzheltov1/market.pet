/**
 * Function that assembles page title concating default ending - Market.pet
 * @param {string} baseTitle base title of the page 
 * @returns {string} normalized page title
 */
export const assemblePageTitle = (baseTitle: string): string => {
    return baseTitle + " — Market.pet";
}