// Valor inicial da dívida em reais
let valorDivida = 1000;

// Taxa de juros mensais em formato decimal
let taxaJurosMensal = 0.05; // 5%

// Número de meses
let numeroDeMeses = 12;

// Cálculo do montante total
let montanteTotal = valorDivida * Math.pow(1 + taxaJurosMensal, numeroDeMeses);

// Exibindo informações no console
console.log(`Valor da Dívida Inicial: R$${valorDivida.toFixed(2)}`);
console.log(`Taxa de Juros Mensais: ${taxaJurosMensal * 100}%`);
console.log(`Número de Meses: ${numeroDeMeses}`);
console.log(`Montante Total ao Final de ${numeroDeMeses} meses: R$${montanteTotal.toFixed(2)}`);