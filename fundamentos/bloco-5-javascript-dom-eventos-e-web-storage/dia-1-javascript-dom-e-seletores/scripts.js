        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()

        */

// Exercicio 1 - Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeText() {
  let paragraph = document.getElementsByTagName('p');
  paragraph[1].innerHTML = 'Quero ficar cheio de dinheiro e ter tempo de qualidade para estar com as pessoas que eu gosto';
}

changeText();

// Exercicio 2 - Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeBgColor(className, color) {
  let mainDiv = document.getElementsByClassName(className);
  mainDiv[0].style.backgroundColor = color;
}
changeBgColor('main-content', 'rgb(76,164,109)');

// Exercicio 3 - Crie uma função que mude a cor do quadrado vermelho para branco.

changeBgColor('center-content', 'White');

// Exercicio 4 - Crie uma função que corrija o texto da tag <h1>.

function changeTagText(tagName, text){
  let title = document.getElementsByTagName(tagName);
  title[0].innerHTML = text;
}

changeTagText('h1', 'Exercício 5.1 - JavaScript');

// Exercicio 5 - Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function toUpperCaseTagText(tagName) {
  let paragraphs = document.getElementsByTagName(tagName);
  for (const text of paragraphs) {
    text.innerHTML = text.innerHTML.toUpperCase();
  }
}
toUpperCaseTagText('p');

// Exercicio 6 - Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function showOnConsole(tagName) {
  let paragraphs = document.getElementsByTagName(tagName);
  for (const text of paragraphs) {
    console.log(text.innerHTML);
  }
}
showOnConsole('p')