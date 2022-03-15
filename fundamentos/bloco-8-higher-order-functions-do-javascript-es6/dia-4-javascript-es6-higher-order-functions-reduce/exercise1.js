// EXERCICIO 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  const union = array.reduce((acumulator, item) => {
    return acumulator.concat(item);
  }, [])
  return union;
}
console.log(flatten(arrays));
