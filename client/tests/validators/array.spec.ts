// Testing: @/validators/array.ts

import { isArray, isEmptyArray } from "@/validators/array";

describe("check if the given value is an array", () => {
    it("should return true", () => {
        expect(isArray([])).toBeTruthy();
        expect(isArray([1, 10])).toBeTruthy();
    });
    
    it("should return false", () => {
        expect(isArray("")).toBeFalsy();
        expect(isArray({})).toBeFalsy();
        expect(isArray("")).toBeFalsy();
        expect(isArray(NaN)).toBeFalsy();
    });
});

describe("check if the given value is an empty array", () => {
    it("should return true", () => {
        expect(isEmptyArray([])).toBeTruthy();
    });

    it("should return false", () => {
        expect(isEmptyArray([1])).toBeFalsy();
        expect(isEmptyArray([undefined])).toBeFalsy();
        expect(isEmptyArray([null])).toBeFalsy();
    });
});