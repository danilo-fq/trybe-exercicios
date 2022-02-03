let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 7 -Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let minNumber = numbers[0];
for(let index = 0; index < numbers.length; index+=1){
  if(numbers[index] < minNumber) {
    minNumber = numbers[index];
  }
}
console.log("O menor valor desta array é:", minNumber);
