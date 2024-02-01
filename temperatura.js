function convertTemperature() {
    // Obter valores da temperatura e unidade
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;

    // Converter temperatura
    let result;
    if (unit === 'celsius') {
        result = (temperature - 32) * (5 / 9);
    } else {
        result = (temperature * 9 / 5) + 32;
    }

    // Exibir o resultado
    let resultElement = document.getElementById('result');

    if (isNaN(result) || !isFinite(result)) {
        resultElement.textContent = 'Por favor, insira uma temperatura válida.';
    } else {
        resultElement.textContent = `Resultado: ${result.toFixed(2)} ${unit === 'celsius' ? 'Celsius' : 'Fahrenheit'}`;
    }
}