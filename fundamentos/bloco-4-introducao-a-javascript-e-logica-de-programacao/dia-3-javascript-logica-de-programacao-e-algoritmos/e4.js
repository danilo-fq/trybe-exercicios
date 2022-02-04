//4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

const idades = [5, 9, 15, 13, 18, 25, 55, 90];

let pessoa = idades[Math.floor(Math.random() * idades.length)];

console.log(pessoa);
pessoa >= 18 ? console.log("Pessoa é maior de idade") : console.log ("Menor de idade");

