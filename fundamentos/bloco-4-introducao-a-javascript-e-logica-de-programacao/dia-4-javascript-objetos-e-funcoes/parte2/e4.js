//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let namesArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName (names) {
  let isTheBiggestName = '';

  for (const value of names) {
    if (value.length > isTheBiggestName.length) {
      isTheBiggestName = value;
    }
  }
  return isTheBiggestName + ', Quantidade de caracteres: ' + isTheBiggestName.length;
  };