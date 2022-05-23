// Testing: @/utils/adapters.ts

import { addSpacesToPrice, parseProperties } from "@/utils/adapters";

describe("test utils/adapters", () => {
    it("should convert number to easily readable string with spaces every 3 symbols", () => {
        expect(addSpacesToPrice(100000000)).toBe("100 000 000");
        expect(addSpacesToPrice(10000000)).toBe("10 000 000");
        expect(addSpacesToPrice(1000000)).toBe("1 000 000");
        expect(addSpacesToPrice(100000)).toBe("100 000");
        expect(addSpacesToPrice(100)).toBe("100");
        expect(addSpacesToPrice(10)).toBe("10");
        expect(addSpacesToPrice(0)).toBe("0");
    });

    it("should counvert an object-like string to an actual string", () => {
        expect(parseProperties('{}')).toStrictEqual({});
        expect(parseProperties('{"id": 5}')).toStrictEqual({id: 5});
        expect(parseProperties('{id: 5}')).toStrictEqual({id: 5});
        expect(parseProperties('{id: 5, name: "name"}')).toStrictEqual({id: 5, name: "name"});
        expect(parseProperties('{')).toStrictEqual({});
        expect(parseProperties('}')).toStrictEqual({});
        expect(parseProperties('')).toStrictEqual({});
    });
});