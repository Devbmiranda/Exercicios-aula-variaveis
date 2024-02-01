// Coordenadas do primeiro ponto
let x1 = 1;
let y1 = 2;

// Coordenadas do segundo ponto
let x2 = 4;
let y2 = 6;

// Calcular a distância euclidiana
let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log("A distância entre os dois pontos é: " + distancia.toFixed(2));