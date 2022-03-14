
// EXERCICIO 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// a função split retorna uma quantidade a mais de itens da nova array do que a quantidade de caracteres em questão que esta dividindo a string.
//ref https://www.codegrepper.com/code-examples/javascript/count+how+many+times+a+character+appears+in+a+string+javascript

function containsA(array) {
  const unityWords = array.reduce((fullword, item) => {
    return fullword + item;
  })
  const result = unityWords.toLowerCase().split('a').length -1;
  return `A quantidade de vezes que a letra a aparece dentro da array names é: ${result}`;
}
  
console.log(containsA(names));
