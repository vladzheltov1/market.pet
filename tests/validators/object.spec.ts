// Testing: @/validators/object.ts

import { isEmptyObject, isObject } from "@/validators/object";

describe("check if the given value is an object", () => {
    it("should return true", () => {
        expect(isObject({})).toBeTruthy();
        expect(isObject({key: "value"})).toBeTruthy();
    });
    
    it("should return false", () => {
        expect(isObject("")).toBeFalsy();
        expect(isObject([])).toBeFalsy();
        expect(isObject("")).toBeFalsy();
        expect(isObject(NaN)).toBeFalsy();
    });
});

describe("check if the given value is an empty object", () => {
    it("should return true", () => {
        expect(isEmptyObject({})).toBeTruthy();
    });

    it("should return false", () => {
        expect(isEmptyObject({key: "value"})).toBeFalsy();
        expect(isEmptyObject([undefined])).toBeFalsy();
        expect(isEmptyObject([])).toBeFalsy();
        expect(isEmptyObject([null])).toBeFalsy();
    });
});