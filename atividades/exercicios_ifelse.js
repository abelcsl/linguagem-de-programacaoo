Exercicios if else

Exerc�cio 1
javascript
CopiarEditar
let idade = parseInt(prompt("Digite sua idade:"));
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
________________________________________
Exerc�cio 2
javascript
CopiarEditar
let hora = parseInt(prompt("Digite a hora (0-23):"));
if (hora >= 6 && hora < 12) {
    console.log("Bom dia");
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}
________________________________________
Exerc�cio 3
javascript
CopiarEditar
let idadeEvento = parseInt(prompt("Digite sua idade:"));
if (idadeEvento >= 16) {
    console.log("Pode entrar no evento");
} else {
    console.log("N�o pode entrar no evento");
}
________________________________________
Exerc�cio 4
javascript
CopiarEditar
let num1 = parseInt(prompt("Digite o primeiro n�mero:"));
let num2 = parseInt(prompt("Digite o segundo n�mero:"));
if (num1 > num2) {
    console.log("O maior n�mero �:", num1);
} else {
    console.log("O maior n�mero �:", num2);
}
________________________________________
Exerc�cio 5
javascript
CopiarEditar
let temp = parseFloat(prompt("Digite a temperatura:"));
if (temp < 18) {
    console.log("Frio");
} else if (temp <= 25) {
    console.log("T�rmico");
} else {
    console.log("Quente");
}
________________________________________
Exerc�cio 6
javascript
CopiarEditar
let palavra = prompt("Digite uma palavra:");
if (palavra === "Felicidade") {
    console.log("Palavra correta");
} else {
    console.log("Palavra incorreta");
}
________________________________________
Exerc�cio 7
javascript
CopiarEditar
let moedas = parseInt(prompt("Digite a quantidade de moedas:"));
if (moedas < 10) {
    console.log("Poucas moedas");
} else if (moedas <= 20) {
    console.log("Quantidade m�dia");
} else {
    console.log("Muitas moedas");
}
________________________________________
Exerc�cio 8
javascript
CopiarEditar
let temperatura = parseFloat(prompt("Digite a temperatura em �C:"));
if (temperatura > 30) {
    console.log("Muito quente");
} else if (temperatura >= 20) {
    console.log("Calor");
} else {
    console.log("Frio");
}
________________________________________
Exerc�cio 9
javascript
CopiarEditar
let numero = parseFloat(prompt("Digite um n�mero:"));
if (numero >= 0) {
    console.log("Positivo");
} else {
    console.log("Negativo");
}
________________________________________
Exerc�cio 10
javascript
CopiarEditar
let nota = parseFloat(prompt("Digite a nota do aluno:"));
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
________________________________________
Exerc�cio 11
javascript
CopiarEditar
let animal = prompt("Digite um animal:");
if (animal === "Cachorro" || animal === "Gato" || animal === "P�ssaro") {
    console.log("Animal listado");
} else {
    console.log("Animal n�o listado");
}
________________________________________
Exerc�cio 12
javascript
CopiarEditar
let dia = prompt("Digite o dia da semana:");
if (dia === "S�bado" || dia === "Domingo") {
    console.log("Fim de semana");
} else {
    console.log("Dia �til");
}
________________________________________
Exerc�cio 13
javascript
CopiarEditar
let experiencia = parseInt(prompt("Quantos anos de experi�ncia em programa��o?"));
if (experiencia > 2) {
    console.log("Experiente");
} else {
    console.log("Iniciante");
}
________________________________________
Exerc�cio 14
javascript
CopiarEditar
let valor = parseInt(prompt("Digite um n�mero:"));
if (valor >= 10 && valor <= 20) {
    console.log("Dentro do intervalo");
} else {
    console.log("Fora do intervalo");
}
________________________________________
Exerc�cio 15
javascript
CopiarEditar
let idadeCNH = parseInt(prompt("Digite sua idade:"));
if (idadeCNH >= 18) {
    console.log("Pode tirar carteira de motorista");
} else {
    console.log("N�o pode tirar carteira de motorista");
}
________________________________________
Exerc�cio 16
javascript
CopiarEditar
let n = parseInt(prompt("Digite um n�mero:"));
if (n > 0) {
    console.log("Positivo");
} else if (n < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

