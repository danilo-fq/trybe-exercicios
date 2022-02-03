const custoProduto = 30;
const valorVenda = 100;

if (custoProduto > 0 && valorVenda > 0) {
  
  const impostoDoProduto = custoProduto * 0.2;
  const valorTotaldoProduto = custoProduto + impostoDoProduto;
  const lucro = valorVenda - valorTotaldoProduto;

  console.log("Seu lucro será de: R$" + lucro);
} else {
  console.log("ERRO: Valor do custo do produto e/ou valor de venda inválido!");
} 