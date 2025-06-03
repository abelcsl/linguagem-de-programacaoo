console.log("Qual a operação que você deseja realizar?")
console.log("a - soma")
console.log("b - subtração")
console.log("c - multiplicação")
console.log("d - divisão")
let opcao = prompt("Digite uma opção: ")

if (opcao == "a" || opcao == "soma") {
    console.log("Agora escolha dois números para prosseguir")
    let numero1 = Number(prompt("Digite o primeiro número: "))
    let numero2 = Number(prompt("Digite o segundo número: "))

    function soma(numero1, numero2) {
        let resultado = numero1 + numero2
        console.log("O resultado da soma é: ", resultado)
        return resultado
    }

    soma(numero1, numero2)
