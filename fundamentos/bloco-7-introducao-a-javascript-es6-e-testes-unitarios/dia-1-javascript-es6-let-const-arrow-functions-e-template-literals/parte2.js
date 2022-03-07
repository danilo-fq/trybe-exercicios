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

/* const longestWord = phrase => {
    const arrayWords = phrase.split(' ');
    let result = '';
    for (let index = 0; index < arrayWords.length; index += 1) {
        arrayWords[index].length > result.length ? result = arrayWords[index] : result
    }
    return `a maior palavra é: ${result}!`;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); */

// EXERCICIO 4 - Crie um código JavaScript com a seguinte especificação:
                // Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

                // Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

                // Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

const searchXLetter = word => {
    let string = 'Tryber x aqui!';
    let result;
    if (string.includes('x')) {
       result = string.replace('x', word);
    }
    return result;
}
console.log(searchXLetter('Danilo'));
