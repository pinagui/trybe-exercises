const myFizzBuzz = require('./my-fizz-buzz')

describe('verify fizzBuzz return', () => {

  it('verify number div by 3 or 5 return "fizzBuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('verify number div by 3 return "fizz"', () => {
    expect(myFizzBuzz(3)).toBe('fizz');  
  });

  it('verify number div by 5 return "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('verify number not div by 3 or 5 return false', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  });

  it('verify isNaN return false', () => {
    expect(myFizzBuzz('2')).toBe(false);
  });

});