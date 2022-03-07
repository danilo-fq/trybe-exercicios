// EXERCICIO 1 - Crie uma função que receba um número e retorne seu fatorial.

// Forma recursive tradiconal
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

console.log(factorialNumberRecursive(3));


