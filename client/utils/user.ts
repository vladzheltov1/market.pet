import { emailRegEx } from "@/constants/regex";

/**
 * Email validator function
 * @returns {boolean} true if email is valid
 */
export const isEmailValid = (email: string): boolean => emailRegEx.test(email.trim());