import { splitOnLastHelper } from './index';

describe('splitOnLastHelper', () => {
  it('should split an array into all elements except the last and the last element', () => {
    expect(splitOnLastHelper([1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4], 5]);
    expect(splitOnLastHelper(['a', 'b', 'c', 'd', 'e'])).toEqual([['a', 'b', 'c', 'd'], 'e']);
    expect(splitOnLastHelper(['a'])).toEqual([[], 'a']);
    expect(splitOnLastHelper([1, 2])).toEqual([[1], 2]);
    expect(splitOnLastHelper(['Yasmin', 'Lopes'])).toEqual([['Yasmin'], 'Lopes']);
    expect(splitOnLastHelper(['ADS', 'Ciencia da computação', 'Sistemas da informação'])).toEqual([['ADS', 'Ciencia da computação'], 'Sistemas da informação']);
  });

  it('should throw an error when the array is empty', () => {
    expect(() => splitOnLastHelper([])).toThrow('Array should contain at least one item');
  });
});