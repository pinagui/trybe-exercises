const {encode, decode} = require('./encode-decode');

describe('verify encode and decode function', () => {

  it('verify if encode and decode is a function', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('verify letters a,e,i,o,u converts to 1,2,3,4,5', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('verify number 1,2,3,4,5 covert to a,e,i,o,u', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('verify other letters and number to return normal', () => {
    expect(encode('bc')).toBe('bc');
    expect(decode('67')).toBe('67');
  });

  it('verify length string have the same length when returned', () => {
    expect(encode('bc').length).toEqual(2);
    expect(decode('12345').length).toEqual(5);
  });  

});