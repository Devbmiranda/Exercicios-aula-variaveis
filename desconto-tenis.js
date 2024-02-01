/ Declarando uma variável de desconto para tênis
var descontoTenis = 0.2; // 20% de desconto

// Exemplo de uso da variável de desconto
var precoOriginal = 100; // Preço original do tênis
var precoComDesconto = precoOriginal - (precoOriginal * descontoTenis);

console.log("Preço original: $" + precoOriginal);
console.log("Desconto aplicado: " + (descontoTenis * 100) + "%");
console.log("Preço com desconto: $" + precoComDesconto);