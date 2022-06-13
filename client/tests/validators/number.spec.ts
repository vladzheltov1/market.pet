// Testing: @/validators/number.ts

import { isNumber } from "@/validators/number";

describe("check if the given value can be converted to number", () => {
    it("should return true", () => {
        expect(isNumber("5")).toBeTruthy();
        expect(isNumber("10")).toBeTruthy();
        expect(isNumber("10")).toBeTruthy();
        expect(isNumber(5)).toBeTruthy();
    });
    
    it("should return false", () => {
        expect(isNumber("")).toBeFalsy();
        expect(isNumber("a")).toBeFalsy();
        expect(isNumber({})).toBeFalsy();
        expect(isNumber([])).toBeFalsy();
    });
});