const Measure = require("./measure")

test("Test one teaspoon is a Teaspoon", () => {
    const teaspoon = new Measure(1, 'tsp');
    expect(teaspoon.equals(teaspoon)).toBe(true)
})

test("teaspoons with different quantities are not equal", () => {
    const teaspoon = new Measure(1, 'tsp');
    const twoTeaspoons = new Measure(2, 'tsp');
    expect(twoTeaspoons.equals(teaspoon)).toBe(false)
    expect(teaspoon.equals(twoTeaspoons)).toBe(false)
})

test("test different units are not equal", () => {
    const teaspoon = new Measure(1, 'tsp');
    const tablespoon = new Measure(1, 'tbsp');
    expect(teaspoon.equals(tablespoon)).toBe(false);
    expect(tablespoon.equals(teaspoon)).toBe(false);
})

test("test 3 teaspoons are equal to a tablespoon", () => {
    const threeTeaspoons = new Measure(3, 'tsp');
    const tablespoon = new Measure(1, 'tbsp');
    expect(threeTeaspoons.equals(tablespoon)).toBe(true)
    expect(tablespoon.equals(threeTeaspoons)).toBe(true)
})