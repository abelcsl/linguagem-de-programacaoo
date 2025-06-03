Atividade 1

let nome = prompt(&quot;Digite seu nome: &quot;)
let idade = Number(prompt(&quot;Digite a sua idade:&quot;))
let email = prompt(&quot;Digite seu email:&quot;)
let telefone = Number(prompt(&quot;digite seu numero:&quot;))
let confirmação = prompt(&quot;voce confirma?&quot;)
console.log(&quot;o seu nome é&quot;, nome,&quot;voce tem&quot;,idade,&quot;anos&quot;, &quot;seu gmail é&quot;, email, &quot;seu numero
é&quot;, telefone,)

Atividade 2

function calcularIdade() {
const anoAtual = 2025
let anoNascimento = parseInt(prompt(&quot;Digite o seu ano de nascimento:&quot;))
let idade = anoAtual - anoNascimento
console.log(`Você tem ${idade} anos.`)
}

calcularIdade();
