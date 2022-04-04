// Exercicio 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const { it, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
uppercase('danilo', (result) => console.log(`${result} é lindo maiusculo`));

it('uppercase \'test\' to equal \'TEST\'', (done) => {
  uppercase('test', (result) => {
    try{
      expect(result).toBe('TEST');
      done();
    } catch(error) {
      done(error);
    }
  });
});