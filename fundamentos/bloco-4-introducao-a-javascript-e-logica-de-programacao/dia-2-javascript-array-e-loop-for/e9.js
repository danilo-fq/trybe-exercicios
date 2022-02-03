
// Exercicio 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let newArray = [];
for(let index = 1; index <= 25; index+=1){
  newArray.push(index);
}
console.log(newArray);

let divArray = [];
for(let index2 = 0; index2 < newArray.length; index2+=1){
  divArray.push(newArray[index2]/2);
}

console.log(divArray);

