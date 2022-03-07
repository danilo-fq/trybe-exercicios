/* EXERCICIO 1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
      Modifique a estrutura da função para que ela seja uma arrow function .
      Modifique as concatenações para template literals . */

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false);

/* EXERCICIO 2 - Faça uma função que retorne o array oddsAndEvens em ordem crescente.
      Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
      Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */

// Resolução padrão
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

/* const sortOddsAndEvens = () => {
  const sortArray = [];
  for (let index = 0; index < oddsAndEvens.length - 1; index += 1) {
    for (let index2 = index + 1; index2 < oddsAndEvens.length; index2 += 1) {
      if (oddsAndEvens[index] > oddsAndEvens[index2]) {
        const value = oddsAndEvens[index2];
        oddsAndEvens[index2] = oddsAndEvens[index];
        oddsAndEvens[index] = value;
      }
    }
  }
  return oddsAndEvens;
}

console.log(sortOddsAndEvens()); */

// Resolução com array.sort (necessita da função de comparação)
// o método .sort ordena os elementos da array e retorna uma array ordenada. A ordenação padrão é de acordo com a pontuação de código unicode.
// ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const sortOddsAndEvens = array => {
  const sortArray = array.sort()
  return sortArray;
}
console.log('sem comparação', sortOddsAndEvens(oddsAndEvens));

const sortOddsAndEvensComp = array => {
  const sortArray = array.sort((a, b) => {
    return a - b;
  })
  return sortArray;
}
console.log('com comparação', sortOddsAndEvensComp(oddsAndEvens));
