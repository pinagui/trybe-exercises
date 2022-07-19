const myRemove = require('./remove-arr');


describe('Remove selected item from array', () => {

  it('verify arr [1, 2, 3, 4] return arr without 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });

  it('verify arr [1, 2, 3, 4] dont return arr', () => {
      expect(myRemove([[1, 2, 3, 4], 3])).not.toEqual([1, 2, 3, 4])
  });

  it('very arr [1, 2, 3, 4] return normal arr', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});