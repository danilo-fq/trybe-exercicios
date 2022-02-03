const salarioBruto = 1637.91;
let salarioDeducaoINSS = 0;
let aliquotaINSS = 0;
let aliquotaIR = 0;

let salarioLiquido = 0;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
  salarioDeducaoINSS = salarioBruto - aliquotaINSS;
  
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
  salarioDeducaoINSS = salarioBruto - aliquotaINSS;

} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
  salarioDeducaoINSS = salarioBruto - aliquotaINSS;

} else if (salarioBruto > 5189.82) {
  aliquotaINSS = 570.88;
  salarioDeducaoINSS = salarioBruto - aliquotaINSS;

} else {
  console.log("valor do salario bruto inválido!");
}

/* console.log(aliquotaINSS); */

if (salarioDeducaoINSS > 0 && salarioDeducaoINSS <= 1903.98) {
  aliquotaIR = 0;
  
} else if (salarioDeducaoINSS >= 1903.99 && salarioDeducaoINSS <= 2826.65) {
  aliquotaIR = salarioDeducaoINSS * 0.075 - 142.80;
  
} else if (salarioDeducaoINSS >= 2826.66 && salarioDeducaoINSS <= 3751.05) {
  aliquotaIR = salarioDeducaoINSS * 0.15 - 354.80;
  
} else if (salarioDeducaoINSS >= 3751.06 && salarioDeducaoINSS <= 4664.68) {
  aliquotaIR = salarioDeducaoINSS * 0.225 - 636.13;
  
} else if (salarioDeducaoINSS > 4664.68) {
  aliquotaIR = salarioDeducaoINSS * 0.275 - 869.36;
  
} else {
  console.log("valor do salario bruto inválido!");
}

/* console.log(aliquotaIR); */

salarioLiquido = salarioDeducaoINSS - aliquotaIR;
console.log("O seu salário líquido será de: R$" + salarioLiquido + ".");
console.log("Sua aloquota do INSS é de: R$" + aliquotaINSS + ".");
console.log("A sua aliquota de IR é de: R$" + aliquotaIR + ".");