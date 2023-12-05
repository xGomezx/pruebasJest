const area = require("./AreaTriangulo")

test('area de triangulo base 4, altura 2 es igual a 4', () => {
    expect(area(4, 2)).toBe(4);
  });