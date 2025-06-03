Exercicios if else

Exercício 1
javascript
CopiarEditar
let idade = parseInt(prompt("Digite sua idade:"));
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
________________________________________
Exercício 2
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
Exercício 3
javascript
CopiarEditar
let idadeEvento = parseInt(prompt("Digite sua idade:"));
if (idadeEvento >= 16) {
    console.log("Pode entrar no evento");
} else {
    console.log("Não pode entrar no evento");
}
________________________________________
Exercício 4
javascript
CopiarEditar
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
if (num1 > num2) {
    console.log("O maior número é:", num1);
} else {
    console.log("O maior número é:", num2);
}
________________________________________
Exercício 5
javascript
CopiarEditar
let temp = parseFloat(prompt("Digite a temperatura:"));
if (temp < 18) {
    console.log("Frio");
} else if (temp <= 25) {
    console.log("Térmico");
} else {
    console.log("Quente");
}
________________________________________
Exercício 6
javascript
CopiarEditar
let palavra = prompt("Digite uma palavra:");
if (palavra === "Felicidade") {
    console.log("Palavra correta");
} else {
    console.log("Palavra incorreta");
}
________________________________________
Exercício 7
javascript
CopiarEditar
let moedas = parseInt(prompt("Digite a quantidade de moedas:"));
if (moedas < 10) {
    console.log("Poucas moedas");
} else if (moedas <= 20) {
    console.log("Quantidade média");
} else {
    console.log("Muitas moedas");
}
________________________________________
Exercício 8
javascript
CopiarEditar
let temperatura = parseFloat(prompt("Digite a temperatura em °C:"));
if (temperatura > 30) {
    console.log("Muito quente");
} else if (temperatura >= 20) {
    console.log("Calor");
} else {
    console.log("Frio");
}
________________________________________
Exercício 9
javascript
CopiarEditar
let numero = parseFloat(prompt("Digite um número:"));
if (numero >= 0) {
    console.log("Positivo");
} else {
    console.log("Negativo");
}
________________________________________
Exercício 10
javascript
CopiarEditar
let nota = parseFloat(prompt("Digite a nota do aluno:"));
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
________________________________________
Exercício 11
javascript
CopiarEditar
let animal = prompt("Digite um animal:");
if (animal === "Cachorro" || animal === "Gato" || animal === "Pássaro") {
    console.log("Animal listado");
} else {
    console.log("Animal não listado");
}
________________________________________
Exercício 12
javascript
CopiarEditar
let dia = prompt("Digite o dia da semana:");
if (dia === "Sábado" || dia === "Domingo") {
    console.log("Fim de semana");
} else {
    console.log("Dia útil");
}
________________________________________
Exercício 13
javascript
CopiarEditar
let experiencia = parseInt(prompt("Quantos anos de experiência em programação?"));
if (experiencia > 2) {
    console.log("Experiente");
} else {
    console.log("Iniciante");
}
________________________________________
Exercício 14
javascript
CopiarEditar
let valor = parseInt(prompt("Digite um número:"));
if (valor >= 10 && valor <= 20) {
    console.log("Dentro do intervalo");
} else {
    console.log("Fora do intervalo");
}
________________________________________
Exercício 15
javascript
CopiarEditar
let idadeCNH = parseInt(prompt("Digite sua idade:"));
if (idadeCNH >= 18) {
    console.log("Pode tirar carteira de motorista");
} else {
    console.log("Não pode tirar carteira de motorista");
}
________________________________________
Exercício 16
javascript
CopiarEditar
let n = parseInt(prompt("Digite um número:"));
if (n > 0) {
    console.log("Positivo");
} else if (n < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

