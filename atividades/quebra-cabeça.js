console.log("Qual a opera��o que voc� deseja realizar?")
console.log("a - soma")
console.log("b - subtra��o")
console.log("c - multiplica��o")
console.log("d - divis�o")
let opcao = prompt("Digite uma op��o: ")

if (opcao == "a" || opcao == "soma") {
    console.log("Agora escolha dois n�meros para prosseguir")
    let numero1 = Number(prompt("Digite o primeiro n�mero: "))
    let numero2 = Number(prompt("Digite o segundo n�mero: "))

    function soma(numero1, numero2) {
        let resultado = numero1 + numero2
        console.log("O resultado da soma �: ", resultado)
        return resultado
    }

    soma(numero1, numero2)
