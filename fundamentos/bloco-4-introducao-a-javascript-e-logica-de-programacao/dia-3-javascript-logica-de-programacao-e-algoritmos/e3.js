// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

const jogo = ['pedra', 'papel', 'tesoura'];

let player1 = jogo[Math.floor(Math.random() * jogo.length)];
let player2 = jogo[Math.floor(Math.random() * jogo.length)];

if ( player1 === 'pedra' && player2 === 'tesoura') {
  console.log("Player 1 won.");
} else if ( player1 === 'papel' && player2 === 'pedra') {
  console.log("Player 1 won.");
} else if ( player1 === 'tesoura' && player2 === 'papel') {
  console.log("Player 1 won.");
} else if ( player1 ===  player2 ) {
  console.log("A Ties.");
} else {
  console.log("Player 2 won.");
}
