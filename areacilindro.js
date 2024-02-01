// Definindo as variáveis
let raioBase = 5; // Raio da base do cilindro
let alturaCilindro = 12; // Altura do cilindro

// Cálculo da área total do cilindro
let areaTotalCilindro = 2 * Math.PI * Math.pow(raioBase, 2) + 2 * Math.PI * raioBase * alturaCilindro;

// Exibindo o resultado no console
console.log(`Raio da base do cilindro: ${raioBase}`);
console.log(`Altura do cilindro: ${alturaCilindro}`);
console.log(`Área total do cilindro: ${areaTotalCilindro.toFixed(2)}`);