//Bônus 2  - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base

let n = 5;

for (let index = 1; index <= n; index+= 1) {
  let linha = '';
  let numAsteriscos = '';
  for( let asteriscos = 1; asteriscos <= index; asteriscos+=1){
    numAsteriscos+= "*";
  }
  linha = numAsteriscos;
  console.log(linha);
}