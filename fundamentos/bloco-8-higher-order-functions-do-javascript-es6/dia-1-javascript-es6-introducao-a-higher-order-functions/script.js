// EXERCICIO 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (register) => {
  const employees = {
    id1: register('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: register('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: register('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// baby steps
// 1 - Crie uma função
// 2 - retorne um objeto no formato { nomeCompleto, email }
// 3 - Passe sua função como parâmetro da HOF newEmployees
// 4 - A sua função deve receber como parâmetro o nome completo
// 5 - sua função deve gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
// 6 - como substituir TODOS os espaços do nome completo por _ (underline) ?
// 7 - como transformar todas as letras maiusculas em minusculas do nome completo?

//ref: https://raccoon.ninja/pt/dev-pt/substituindo-todos-os-espacos-de-uma-string-por-underscore-_-javascript/#:~:text=Se%20voc%C3%AA%20utilizar%20a%20sintaxe,%E2%80%9C%2C%20%E2%80%9C_%E2%80%9D).

const register = (nomeCompleto) => {
  const newNameFormat = nomeCompleto.replace(/ /g, `_`).toLowerCase();
  return { nome: nomeCompleto, email: `${newNameFormat}@trybe.com` }
}

// EXERCICIO 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

//baby steps
// 1 - Criar uma HOF que retorna o resultado de um sorteio (se ganhou ou nao)
// 2 - gerá um número aleatório entre 1 e 5
// 3 - a HOF retorna uma string ("Tente novamente" ou "Parabéns você ganhou")
// 3 - tem como parametroS um número e uma callback function
// 4 - a callback function checa se o número é igual ao sorteado
// 5 - Como sortear um número entre 1 e 5? (Math.floor(Math.random() * 5) + 1)

//ref: https://www.codegrepper.com/code-examples/javascript/random+number+between+1+and+5+javascript

const raffle = (number, checkRaffle) => {
  let result;
  const drawnNumber = Math.floor(Math.random() * 5) + 1;
  checkRaffle(number, drawnNumber) ? result = "Parabéns você ganhou" : result = "Tente novamente";
  
  return `${result}!! Seu número foi ${number} e o número sorteado ${drawnNumber}`;
}

const checkRaffle = (number, drawnNumber) => drawnNumber === number;


console.log(raffle(5, checkRaffle));