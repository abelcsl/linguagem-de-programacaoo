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

} else if (opcao == "b" || opcao == "subtração") {
    console.log("Agora escolha dois números para prosseguir")

    let numero3 = Number(prompt("Digite o primeiro número: "))
    let numero4 = Number(prompt("Digite o segundo número: "))

    function subtração(numero3, numero4) {
        let resultado = numero3 - numero4
        console.log("O resultado da subtração é: ", resultado)
        return resultado
    }

    subtração(numero3, numero4)

} else if (opcao == "c" || opcao == "multiplicação") {
    console.log("Agora escolha dois números para prosseguir")

    let numero5 = Number(prompt("Digite o primeiro número: "))
    let numero6 = Number(prompt("Digite o segundo número: "))

    function multiplicacao(numero5, numero6) {
        let resultado = numero5 * numero6
        console.log("O resultado da multiplicação é: ", resultado)
        return resultado
    }

    multiplicacao(numero5, numero6)

} else if (opcao == "d" || opcao == "divisão") {
    console.log("Agora escolha dois números para prosseguir")
    let numero7 = Number(prompt("Digite o primeiro número: "))
    let numero8 = Number(prompt("Digite o segundo número: "))

    function divisao(numero7, numero8) {
        if (numero8 == 0) {
            console.log("Não é possível dividir por zero.")
        } else {
            let resultado = numero7 / numero8
            console.log("O resultado da divisão é: ", resultado)
            return resultado
        }
    }

    divisao(numero7, numero8)

} else {
    console.log("Digite uma alternativa válida.")
}


return resultado
}

multiplicacao(numero5, numero6)
} else if (opcao == "d" || opcao == "divisão") {
    console.log("Agora escolha dois números para prosseguir")
    let numero7 = Number(prompt("Digite o primeiro número: "))
    let numero8 = Number(prompt("Digite o segundo número: "))

    function divisao(numero7, numero8) {
        if (numero8 == 0) {
            console.log("Não é possível dividir por zero.")
        } else {
            let resultado = numero7 / numero8
            console.log("O resultado da divisão é: ", resultado)
            return resultado
        }
    }

    divisao(numero7, numero8)
} else {
    console.log("Digite uma alternativa válida.")
}


return resultado
    }

    multiplicacao(numero5, numero6)
} else if (opcao == "d" || opcao == "divisão") {
    console.log("Agora escolha dois números para prosseguir")
    let numero7 = Number(prompt("Digite o primeiro número: "))
    let numero8 = Number(prompt("Digite o segundo número: "))

    function divisao(numero7, numero8) {
        if (numero8 == 0) {
            console.log("Não é possível dividir por zero.")
        } else {
            let resultado = numero7 / numero8
            console.log("O resultado da divisão é: ", resultado)
            return resultado
        }
    }

    divisao(numero7, numero8)


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
