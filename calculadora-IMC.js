// Valores específicos
let peso = 97; // em kg
let altura = 1.83; // em metros

// Calcular o IMC
let imc = peso / (altura * altura);

// Exibir o resultado
console.log("Seu IMC é: " + imc.toFixed(2));

// Interpretar o resultado
if (imc < 18.5) {
    console.log("Você está abaixo do peso.");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Seu peso está normal.");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Você está com sobrepeso.");
} else if (imc >= 30 && imc < 34.9) {
    console.log("Você está com obesidade grau I.");
} else if (imc >= 35 && imc < 39.9) {
    console.log("Você está com obesidade grau II.");
} else {
    console.log("Você está com obesidade grau III.");
}

