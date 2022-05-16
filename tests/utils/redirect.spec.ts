// Testing: @/utils/redirect.ts

import { assembleLink } from "@/utils/redirect";

describe("must assemble url with the base url and the given props", () => {
    it("should add props to url properly", () => {
        expect(assembleLink("/shop", {prop1: "prop1"})).toBe("/shop?prop1=prop1");

        expect(assembleLink("/shop", {prop1: "prop1", prop2: "prop2"})).toBe("/shop?prop1=prop1&prop2=prop2");

        expect(assembleLink("/shop", {prop: 10})).toBe("/shop?prop=10");

        expect(assembleLink("/shop", {})).toBe("/shop");
    });
});