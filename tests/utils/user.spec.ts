// Testing: @/utils/user.ts

import { isEmailValid } from "@/utils/user";

describe("must check if the given email is valid", () => {
    it("should return true if email is valid, false in different case", () => {
        expect(isEmailValid("test@test.com")).toBe(true);

        expect(isEmailValid("1@b.k")).toBe(false);

        expect(isEmailValid("2@2.2")).toBe(false);

        expect(isEmailValid("test@com")).toBe(false);

        expect(isEmailValid("test@@test.com")).toBe(false);

        expect(isEmailValid("test@test")).toBe(false);

        expect(isEmailValid("test@test.")).toBe(false);

        expect(isEmailValid("@test.com")).toBe(false);
    });
})