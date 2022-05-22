// Testing: @/utils/adapters.ts

import { addSpacesToPrice } from "@/utils/adapters";

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
});