// Exercicio Bônus 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// minha logica doida
/* for (let index = 0; index < numbers.length; index += 1) {
  for(let index2 = numbers.length; index2 > index; index2 -= 1) {
    if (numbers[index] > numbers[index2]) {
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position; 
    }     
  }
}
console.log(numbers); */

for(let foward = 1; foward < numbers.length; foward += 1){
  for (let before = 0; before < foward; before += 1) {
    if(numbers[foward] < numbers[before]) {
      let position = numbers[before];
      numbers[before] = numbers[foward];
      numbers[foward] = position;
    }
  }
}
console.log(numbers);