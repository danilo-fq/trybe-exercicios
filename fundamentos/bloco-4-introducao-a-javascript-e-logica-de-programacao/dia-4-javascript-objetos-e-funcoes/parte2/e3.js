//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numbersArray = [1, 50, 74, 23, 120, 33, 35, 42, 200];

function isBiggestNumber (numbers) {
  let smallestNumber = numbers[numbers.length-1];
  for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] < smallestNumber) {
      smallestNumber = numbers[index];
    }
  }
  return smallestNumber;
}