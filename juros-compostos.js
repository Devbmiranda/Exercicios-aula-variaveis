// Variáveis
var principal = 1000; // Capital inicial
var taxaDeJuros = 0.05; // Taxa de juros anual (5%)
var tempoEmAnos = 3; // Tempo em anos
var periodosPorAno = 1; // Número de vezes que os juros são compostos por ano

// Cálculo dos juros compostos
var montante = principal * Math.pow(1 + taxaDeJuros / periodosPorAno, periodosPorAno * tempoEmAnos);

// Exibição do resultado
console.log("Montante total após " + tempoEmAnos + " anos: R$" + montante.toFixed(2));