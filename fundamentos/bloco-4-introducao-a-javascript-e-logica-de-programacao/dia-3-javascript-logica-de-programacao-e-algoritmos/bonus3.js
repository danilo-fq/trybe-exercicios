//Bônus 3  - Com base no exercicio anterior. Agora inverta o lado do triângulo.

/* let n = 5;

for (let index = 1; index <= n; index+= 1) {
  let linha = '';
  let numAsteriscos = '';
  let numEspacos = '     ';
  for( let asteriscos = 1; asteriscos <= index; asteriscos+=1){
    numEspacos-=' ';
    numAsteriscos+= "*";
  }
  linha = numEspacos + numAsteriscos;
  console.log(linha);
} */


let n = 5;
let symbol = '*';
let linha = '';


for (let index = 1; index <= n; index+=1) {
  for(let columnIndex = 1; columnIndex <= n; columnIndex+=1){
    if(columnIndex < n){
      linha += ' ';
    } else {
      linha+= symbol;
    }
  } 
  console.log(linha);
  linha = '';
  n -= 1;
}