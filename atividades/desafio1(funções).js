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

} else if (opcao == "b" || opcao == "subtra��o") {
    console.log("Agora escolha dois n�meros para prosseguir")

    let numero3 = Number(prompt("Digite o primeiro n�mero: "))
    let numero4 = Number(prompt("Digite o segundo n�mero: "))

    function subtra��o(numero3, numero4) {
        let resultado = numero3 - numero4
        console.log("O resultado da subtra��o �: ", resultado)
        return resultado
    }

    subtra��o(numero3, numero4)

} else if (opcao == "c" || opcao == "multiplica��o") {
    console.log("Agora escolha dois n�meros para prosseguir")

    let numero5 = Number(prompt("Digite o primeiro n�mero: "))
    let numero6 = Number(prompt("Digite o segundo n�mero: "))

    function multiplicacao(numero5, numero6) {
        let resultado = numero5 * numero6
        console.log("O resultado da multiplica��o �: ", resultado)
        return resultado
    }

    multiplicacao(numero5, numero6)

} else if (opcao == "d" || opcao == "divis�o") {
    console.log("Agora escolha dois n�meros para prosseguir")
    let numero7 = Number(prompt("Digite o primeiro n�mero: "))
    let numero8 = Number(prompt("Digite o segundo n�mero: "))

    function divisao(numero7, numero8) {
        if (numero8 == 0) {
            console.log("N�o � poss�vel dividir por zero.")
        } else {
            let resultado = numero7 / numero8
            console.log("O resultado da divis�o �: ", resultado)
            return resultado
        }
    }

    divisao(numero7, numero8)

} else {
    console.log("Digite uma alternativa v�lida.")
}


return resultado
}

multiplicacao(numero5, numero6)
} else if (opcao == "d" || opcao == "divis�o") {
    console.log("Agora escolha dois n�meros para prosseguir")
    let numero7 = Number(prompt("Digite o primeiro n�mero: "))
    let numero8 = Number(prompt("Digite o segundo n�mero: "))

    function divisao(numero7, numero8) {
        if (numero8 == 0) {
            console.log("N�o � poss�vel dividir por zero.")
        } else {
            let resultado = numero7 / numero8
            console.log("O resultado da divis�o �: ", resultado)
            return resultado
        }
    }

    divisao(numero7, numero8)
} else {
    console.log("Digite uma alternativa v�lida.")
}


return resultado
    }

    multiplicacao(numero5, numero6)
} else if (opcao == "d" || opcao == "divis�o") {
    console.log("Agora escolha dois n�meros para prosseguir")
    let numero7 = Number(prompt("Digite o primeiro n�mero: "))
    let numero8 = Number(prompt("Digite o segundo n�mero: "))

    function divisao(numero7, numero8) {
        if (numero8 == 0) {
            console.log("N�o � poss�vel dividir por zero.")
        } else {
            let resultado = numero7 / numero8
            console.log("O resultado da divis�o �: ", resultado)
            return resultado
        }
    }

    divisao(numero7, numero8)


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
