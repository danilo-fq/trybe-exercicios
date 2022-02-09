//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let numbersArray = [1, 50, 74, 23, 120, 33, 35, 42, 200];

function isBiggestNumber (numbers) {
  let biggestNumber = 0;
  for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] > biggestNumber) {
      biggestNumber = numbers[index];
    }
  }
  return biggestNumber;
}