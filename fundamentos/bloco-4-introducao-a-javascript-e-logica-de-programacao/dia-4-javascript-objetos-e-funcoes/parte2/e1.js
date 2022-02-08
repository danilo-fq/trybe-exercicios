//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

//usando split, join e reverse
function isPalindrome(word) {
  let reverseWord = word.split('').reverse().join('');
  if (reverseWord === word) {
    return true;
  } else {
    return false;
  }
};

//usando for

function isPalindrome(word) {
  let reverseWord = '';
  for (let index = word.length-1; index >= 0; index-=1) {
    reverseWord+= word[index];
  }
  if (reverseWord === word) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome('arara'));