//4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let biggestPrime = 2;
for(let prime = 3; prime <= 50; prime+=1){
  let isNotPrime = 0;
  for(let divider = 2; divider < prime; divider+=1){
    if(prime%divider == 0){
      isNotPrime += 1;

    }
}
  if (isNotPrime === 0) {
    biggestPrime = prime;
  }
}
console.log(biggestPrime);