const fact = require("./facto")

test('Factorial del numero 5', () => {
    expect(fact(5)).toBe(120);
  });