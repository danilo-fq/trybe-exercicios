let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let oddNumbers = 0;

for(let index = 0; index < numbers.length; index+=1){
  if (numbers[index] % 2 !== 0) {
    oddNumbers += 1;
    console.log("Quantidade de números impares", oddNumbers);
    console.log("é numero impar", numbers[index]);
  } else if (oddNumbers == 0){
    console.log("nenhum valor impar encontrado.");
  }
}
console.log("Existem " + oddNumbers + " números impares na array.");
