document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores dos inputs
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verificando se os valores inseridos são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calculando o IMC
    const imc = peso / (altura * altura);

    // Definindo a classificação
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3';
    }

    // Exibindo os resultados
    document.getElementById('imc').textContent = imc.toFixed(2);
    document.getElementById('classificacao').textContent = classificacao;

    // Exibindo o resultado
    document.getElementById('resultado').style.display = 'block';
});