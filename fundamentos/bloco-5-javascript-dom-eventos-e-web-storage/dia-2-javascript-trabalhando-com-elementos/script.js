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


// 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.