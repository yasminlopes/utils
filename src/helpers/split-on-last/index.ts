/**
 * Realiza uma divisão nos elementos de um `Array`, retornando todos os elementos exceto o último e o próprio último elemento
 *
 * @param value Um Array com pelo menos um item
 * @returns Um Array dividido, contendo todos os elementos exceto o último e o último elemento
 */
export const splitOnLastHelper = <T>(value: T[]): [T[], T] => {
  if (value.length === 0) {
    throw new Error('Array should contain at least one item');
  }

  return [
    value.slice(0, value.length - 1),
    value[value.length - 1],
  ];
};

// console.log(splitOnLastHelper([1, 2, 3, 4, 5])); // [ [ 1, 2, 3, 4 ], 5 ]
// console.log(splitOnLastHelper(['a', 'b', 'c', 'd', 'e'])); // [ [ 'a', 'b', 'c', 'd' ], 'e' ]
// console.log(splitOnLastHelper(['a'])); // [ [], 'a' ]
// console.log(splitOnLastHelper([1, 2])); // [ [ 1 ], 2 ]
// console.log(splitOnLastHelper(['Yasmin', 'Lopes'])); // [ [ 'Yasmin' ], 'Lopes' ]
// console.log(splitOnLastHelper(['ADS', 'Ciencia da computação', 'Sistemas da informação' ])) // [ [ 'ADS', 'Ciencia da computação' ], 'Sistemas da informação' ]