// EXERCICIO 1 - Crie uma função que receba um número e retorne seu fatorial.

/* // Forma recursive tradiconal
const factorialNumber = (number) => {
    let result = 1;
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorialNumber(number - 1);
    }
}

console.log(factorialNumber(5));


// Com operador ternário de forma recursiva
const factorialNumberRecursive = number => number === 0 ? 1 : number * factorialNumberRecursive(number - 1);

console.log(factorialNumberRecursive(3)); */

// EXERCICIO 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = phrase => {
    const arrayWords = phrase.split(' ');
    let result = '';
    for (let index = 0; index < arrayWords.length; index += 1) {
        arrayWords[index].length > result.length ? result = arrayWords[index] : result
    }
    return `a maior palavra é: ${result}!`;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));