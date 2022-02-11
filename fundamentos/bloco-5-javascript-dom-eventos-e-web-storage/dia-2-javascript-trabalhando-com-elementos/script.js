// Exercicios parte 1
// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
  
// criar uma variavel e criar elemento h1
  let elementH1 = document.createElement("h1");

  // atribuir h1 como filho do body
  document.body.appendChild(elementH1);

// 2 - Adicione a tag main com a classe main-content como filho da tag body ;

// criar elemento main
let elementMain = document.createElement("main");

//atribuir a classe para main
elementMain.className = 'main-content';

// por tag main como filho do body
document.body.appendChild(elementMain);


// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

//criar o elemento section
let elementSectionCenter = document.createElement("section");

//atribuir a classe para section
elementSectionCenter.className = 'center-content';

// por tag section como filho da tag main
document.getElementsByTagName('main')[0].appendChild(elementSectionCenter);


// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

// criar o elemento p
let paragraph = document.createElement('p');

// por tag p como filho de section
document.getElementsByTagName('section')[0].appendChild(paragraph);

// adicionando texto
paragraph.innerHTML = "Texto teste e vai pegar de primeira confia";

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

// criando a tag elementSectionLeft
let elementSectionLeft = document.createElement('section');

// atribuindo a classe left-content
elementSectionLeft.className = 'left-content';

// atribuindo sectionleft como filho da tag main
elementMain.appendChild(elementSectionLeft);

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

// criando o elemento sectionright
let elementSectionRight = document.createElement('section');

// atribuindo a classe right-content
elementSectionRight.className = 'right-content';

// atribuindo sectionright como filha da tag main
elementMain.appendChild(elementSectionRight);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

//criando elemento img
let newImg = document.createElement('img');

//anexando atributo src na img
newImg.src = "https://picsum.photos/200";

//atribuindo a classe small-image
newImg.classList.add("small-image");

//atribuindo img como filho do section
elementSectionLeft.appendChild(newImg);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

// criando elemento lista não ordenada
let elementUL = document.createElement('ul');

// criando elementos li da ul e adicionando o texto
let numbersList = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let index = 0; index < numbersList.length; index += 1) {
  // criando elemento li
  let elementLI = document.createElement('li');
  
  // adicionando valor da array numbersList
  elementLI.innerText = numbersList[index];

  // atribuindo li como filha de ul
  elementUL.appendChild(elementLI);
}

// atribuindo ul como filha do section-right
elementSectionRight.appendChild(elementUL);

// 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

//criando elementos h3
for (let index = 1; index <= 3; index += 1) {
  let elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'Esse daqui é ' + index;
  elementMain.appendChild(elementH3);
}

// Exercicios Parte 2

// 2.1 - Adicione a classe title na tag h1 criada;

document.getElementsByTagName('h1')[0].className = 'title';

// 2.2 - Adicione a classe description nas 3 tags h3 criadas;

let arrayH3 = document.getElementsByTagName('h3');

for (let index = 0; index < arrayH3.length; index += 1) {
  arrayH3[index].className = 'description';
}

// 2.3 - Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

elementMain.removeChild(document.getElementsByClassName('left-content')[0]);

// 2.4 - Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

document.getElementsByClassName('right-content')[0].style.marginRight = 'auto';

// 2.5 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

document.getElementsByClassName('right-content')[0].parentElement.style.backgroundColor = 'green';

// 2.6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

for (let index = 1; index <= 2; index += 1) {
  elementUL.lastChild.remove();
}