const sum = require('./sum');

describe('verify sum operation', () => {

it('verify sum of 4 + 5 = 9', () => {
  expect(sum(4, 5)).toEqual(9);
});

it('verify sum of 0 + 0 = 0', () => {
  expect(sum(0, 0)).toEqual(0);
});

it('verify Error of 4 + "5"', () => {
  () => {expect(sum(4, "5")).toThrow()}
});

it('verify message Error "parameters must be numbers"', () => {
  expect(() => sum(4, "5")).toThrow(Error);
}); 
});