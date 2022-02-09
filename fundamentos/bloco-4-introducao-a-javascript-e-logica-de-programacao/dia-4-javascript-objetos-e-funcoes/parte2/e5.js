//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


let numbersArray = [2, 3, 2, 5, 8, 2, 3];

function mostRepeatNumber (numbers) {
  let mostRepeatNumber = 0;
  let mostRepeats = 1;

  for (let index = 0; index < numbers.length; index +=1) {
    let repeats = 1;
    for(let index2 = 1; index2 < numbers.length; index2 +=1) {
      if (numbers[index] === numbers[index2]) {
        repeats +=1;      
      }
    }
    if (repeats > mostRepeats) {
      mostRepeatNumber = numbers[index];
    }
  }
  
  return mostRepeatNumber;
};

console.log(mostRepeatNumber(numbersArray));