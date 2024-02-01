function calculateCompoundInterest() {
    // Obter valores do principal, taxa de juros e número de anos
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value) / 100; // Converter a taxa para decimal
    let years = parseInt(document.getElementById('years').value);

    // Calcular o montante final usando a fórmula de juros compostos
    let amount = principal * Math.pow(1 + rate, years);

    // Exibir o resultado
    let resultElement = document.getElementById('result');

    if (isNaN(amount) || !isFinite(amount)) {
        resultElement.textContent = 'Por favor, insira valores válidos.';
    } else {
        resultElement.textContent = `O montante final é: R$ ${amount.toFixed(2)}`;
    }
}