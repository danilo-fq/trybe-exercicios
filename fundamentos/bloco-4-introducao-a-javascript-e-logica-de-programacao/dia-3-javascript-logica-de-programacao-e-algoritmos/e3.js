// 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let longestWord = '';
let smallerWord = '';



for (let index = 0; index < array.length; index +=1) {
  if (array[index].length > longestWord.length) {
    longestWord = array[index];
  }
}

for (let index = 0; index < array.length; index +=1) {
  if (array[index].length < longestWord.length && array[index].length !== 0) {
    smallerWord = array[index];
  }
}
console.log("Palavra mais longa", longestWord);
console.log("Palavra mais curta", smallerWord);