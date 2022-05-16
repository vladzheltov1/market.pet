/**
 * Function that adds spaces every 3 symbols for better outlook
 * @example
 * ```
 * priceAdapters(100000) -> "100 000";
 * ```
 * @param {number} priceValue number value of the price
 * @returns {string} normalized price to display
 */
export const addSpacesToPrice = (priceValue: number): string => {
    return priceValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}