const calculate = require("./app");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const x = getRandomInt(1, 9999);
const y = getRandomInt(1, 9999);

test(`Math operations OK`, () => {
  expect(calculate(x, y, "+")).toBe(x + y);
  expect(calculate(y, x, "-")).toBe(y - x);
  expect(calculate(y, x, "*")).toBe(y * x);
  expect(calculate(x, y, "/")).toBe(x / y);
});

test(`Error handling OK`, () => {
  expect(calculate(x.toString(), y, "/")).toMatch(/error/);
  expect(calculate(x, y.toString(), "/")).toMatch(/error/);
  expect(calculate(x, y, 10)).toMatch(/error/);
});
