const chessPiece = 'PEÃO';
const result = chessPiece.toLowerCase();

switch(result) {
  case "peão":
    console.log("Movimenta apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
    break;

    case "torre":
      console.log("Movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
      break;

    case "cavalo":
      console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
      break;
    
    case "bispo":
      console.log("Move-se ao longo da diagonal. Não pode pular outras peças.");
      break;
    
    case "rainha":
      console.log("move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
      break;
    
    case "rei":
      console.log("mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
      break;
    
    default:
      console.log("Não é uma peça de xadrez.");   
}
