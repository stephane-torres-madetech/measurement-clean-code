const {Measure, TEASPOON, TABLESPOON, OUNCE, CUP} = require("./measure")

test("Test one teaspoon is a Teaspoon", () => {
    const teaspoon = new Measure(1, TEASPOON);
    expect(teaspoon.equals(teaspoon)).toBe(true)
})

test("teaspoons with different quantities are not equal", () => {
    const teaspoon = new Measure(1, TEASPOON);
    const twoTeaspoons = new Measure(2, TEASPOON);
    expect(twoTeaspoons.equals(teaspoon)).toBe(false)
    expect(teaspoon.equals(twoTeaspoons)).toBe(false)
})

test("test different units are not equal", () => {
    const teaspoon = new Measure(1, TEASPOON);
    const tablespoon = new Measure(1, TABLESPOON);
    expect(teaspoon.equals(tablespoon)).toBe(false);
    expect(tablespoon.equals(teaspoon)).toBe(false);
})

test("test 3 teaspoons are equal to a tablespoon", () => {
    const threeTeaspoons = TEASPOON.s(3)
    const tablespoon = TABLESPOON.s(1);
    expect(threeTeaspoons.equals(tablespoon)).toBe(true)
    expect(tablespoon.equals(threeTeaspoons)).toBe(true)
})

test('ounces and tablespoons can be compared', () => {
    expect(OUNCE.s(1).equals(TABLESPOON.s(2))).toBe(true)
    expect(CUP.s(1).equals(OUNCE.s(8))).toBe(true)
    expect(CUP.s(1).equals(TABLESPOON.s(16))).toBe(true)
})

