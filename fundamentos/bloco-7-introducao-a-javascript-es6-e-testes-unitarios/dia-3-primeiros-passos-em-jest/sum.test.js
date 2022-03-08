const sum = require('./sum');

describe('Exercise 1 - Tests', () => {

  it('Check if the sum of 4 and 5 is 9.', () => {
    expect(sum(4, 5)).toBe(9);
  })

  it('Check if the sum of 0 and 0 is 0.', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it('Check if the function sum show an error message when its using 4 and "5".', () => {
    expect(() => {sum(4,'5')}).toThrow();
    expect(() => {sum(4,'5')}).toThrow('parameters must be numbers');
  })
})