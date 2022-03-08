const {sum, myRemove, myFizzBuzz} = require('./sum');

//Exercicio 1

describe('Exercise 1 - Tests', () => {

  it('1 - Check if the sum of 4 and 5 is 9.', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('2 - Check if the sum of 0 and 0 is 0.', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('3&4 - Check if the function sum show an error message when its using 4 and "5".', () => {
    expect(() => {sum(4,'5')}).toThrow();
    expect(() => {sum(4,'5')}).toThrow('parameters must be numbers');
  });
})

//Exercicio 2

describe('Exercise 2 - Tests', () => {

  it('1 - Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('2 - Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('3 - Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

})

describe('Exercise 3 - Tests', () => {

  it('1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(6)).toEqual('fizz');
  })

  it('3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  })

  it('4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  })

  it('5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('a')).toEqual(false);
  })
})