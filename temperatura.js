// Função para converter Fahrenheit para Celsius
function converterFahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// Função para converter Celsius para Fahrenheit
function converterCelsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Exemplo de uso
var temperaturaFahrenheit = 32; // Substitua pelo valor desejado em Fahrenheit
var temperaturaCelsius = converterFahrenheitParaCelsius(temperaturaFahrenheit);
console.log(temperaturaFahrenheit + " graus Fahrenheit é igual a " + temperaturaCelsius.toFixed(2) + " graus Celsius.");

// Exemplo de uso
var temperaturaCelsius2 = 0; // Substitua pelo valor desejado em Celsius
var temperaturaFahrenheit2 = converterCelsiusParaFahrenheit(temperaturaCelsius2);
console.log(temperaturaCelsius2 + " graus Celsius é igual a " + temperaturaFahrenheit2.toFixed(2) + " graus Fahrenheit.");