let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let result = 0;

for(let i = 0; i < numbers.length; i+=1){
  result+= numbers[i];
}
console.log(result);