// Testing: @/utils/user.ts

import { isEmailValid } from "@/utils/user";

describe("check if the given email is valid", () => {
    it("should return true", () => {
        expect(isEmailValid("test@test.com")).toBe(true);
        expect(isEmailValid("1@test.com")).toBe(true);
        expect(isEmailValid("a@mail.com")).toBe(true);
    });
    
    it("should return false", () => {
        expect(isEmailValid("1@b.k")).toBe(false);
        expect(isEmailValid("2@2.2")).toBe(false);
        expect(isEmailValid("test@com")).toBe(false);
        expect(isEmailValid("test@@test.com")).toBe(false);
        expect(isEmailValid("test@test")).toBe(false);
        expect(isEmailValid("test@test.")).toBe(false);
        expect(isEmailValid("@test.com")).toBe(false);
    });
})