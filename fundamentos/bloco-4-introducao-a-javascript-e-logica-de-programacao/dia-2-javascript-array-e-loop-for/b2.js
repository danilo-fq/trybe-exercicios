// Exercicio Bônus 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let foward = 1; foward < numbers.length; foward +=1 ) {
  for (let before = 0; before < foward; before += 1) {
    if (numbers[foward] > numbers[before]) {
      let beLast = numbers[before];
      numbers[before] = numbers[foward];
      numbers[foward] = beLast;
    }
  }
}
console.log(numbers);