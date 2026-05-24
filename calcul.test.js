const { additionner, multiplier, diviser } = require('./calcul');

test('additionne deux nombres positifs', () => {
  expect(additionner(2, 3)).toBe(5);
});

test('additionne deux grands nombres', () => {
  expect(additionner(1000, 2000)).toBe(3000);
});

test('additionne avec zero', () => {
  expect(additionner(0, 5)).toBe(5);
});

test('additionne deux zeros', () => {
  expect(additionner(0, 0)).toBe(0);
});

test('additionne deux nombres negatifs', () => {
  expect(additionner(-1, -1)).toBe(-2);
});

test('additionne un positif et un negatif', () => {
  expect(additionner(-5, 10)).toBe(5);
});

test('multiplie deux nombres positifs', () => {
  expect(multiplier(2, 3)).toBe(6);
});

test('multiplie par zero', () => {
  expect(multiplier(5, 0)).toBe(0);
});

test('divise deux nombres', () => {
  expect(diviser(10, 2)).toBe(5);
});

test('divise par zero', () => {
  expect(diviser(5, 0)).toBe(Infinity);
});
