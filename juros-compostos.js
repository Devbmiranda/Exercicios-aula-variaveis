// Variáveis
let principal = 1000; // Capital inicial
let taxaDeJuros = 0.05; // Taxa de juros anual (5%)
let tempoEmAnos = 3; // Tempo em anos
let periodosPorAno = 1; // Número de vezes que os juros são compostos por ano

// Cálculo dos juros compostos
let montante = principal * Math.pow(1 + taxaDeJuros / periodosPorAno, periodosPorAno * tempoEmAnos);

// Exibição do resultado
console.log("Montante total após " + tempoEmAnos + " anos: R$" + montante.toFixed(2));