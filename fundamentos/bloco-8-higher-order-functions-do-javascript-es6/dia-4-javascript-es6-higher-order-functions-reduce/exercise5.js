
// EXERCICIO 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// a função split retorna uma quantidade a mais de itens da nova array do que a quantidade de caracteres em questão que esta dividindo a string.
//ref https://www.codegrepper.com/code-examples/javascript/count+how+many+times+a+character+appears+in+a+string+javascript

function containsA(array) {
  const modifiedArray = array.join().split('');
  const verifyLetters = modifiedArray.reduce((acumulator, letter) => {
    return letter.toLowerCase() === 'a' ? acumulator + 1 : acumulator;
  }, 0)

  return verifyLetters;
}
  
console.log(containsA(names));
