const additionner = require('./calcul');

test('additionne deux nombres positifs', () => {
  expect(additionner(2, 3)).toBe(5);
});

test('additionne deux grands nombres', () => {
  expect(additionner(1000, 2000)).toBe(3000);
});

test('additionne avec zéro', () => {
  expect(additionner(0, 5)).toBe(5);
});

test('additionne deux zéros', () => {
  expect(additionner(0, 0)).toBe(0);
});

test('additionne deux nombres négatifs', () => {
  expect(additionner(-1, -1)).toBe(-2);
});

test('additionne un positif et un négatif', () => {
  expect(additionner(-5, 10)).toBe(5);
});
