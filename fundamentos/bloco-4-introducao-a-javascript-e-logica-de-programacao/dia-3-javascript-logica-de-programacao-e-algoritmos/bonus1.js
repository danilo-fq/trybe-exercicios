//Bônus 1  - Agora vamos trabalhar com algumas formas geométricas! 
//Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let symbol = '*';
let linha = '';

for (let index = 1; index <= n; index+=1) {
  linha+= symbol;
}
for(let index = 1; index <= n; index+=1){
  console.log(linha);
}

/* for (let index = 1; index <= n; index+= 1) {
  let linha = '';
  let numAsteriscos = '';
  for( let asteriscos = 1; asteriscos <= n; asteriscos+=1){
    numAsteriscos+= "*";
  }
  linha = numAsteriscos;
  console.log(linha);
} */