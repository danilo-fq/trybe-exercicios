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

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
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

console.log(sortOddsAndEvens()); // será necessário alterar essa linha 😉