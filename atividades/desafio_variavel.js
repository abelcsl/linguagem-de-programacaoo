Atividade 1

let nome = prompt(&quot;Digite seu nome: &quot;)
let idade = Number(prompt(&quot;Digite a sua idade:&quot;))
let email = prompt(&quot;Digite seu email:&quot;)
let telefone = Number(prompt(&quot;digite seu numero:&quot;))
let confirma��o = prompt(&quot;voce confirma?&quot;)
console.log(&quot;o seu nome �&quot;, nome,&quot;voce tem&quot;,idade,&quot;anos&quot;, &quot;seu gmail �&quot;, email, &quot;seu numero
�&quot;, telefone,)

Atividade 2

function calcularIdade() {
const anoAtual = 2025
let anoNascimento = parseInt(prompt(&quot;Digite o seu ano de nascimento:&quot;))
let idade = anoAtual - anoNascimento
console.log(`Voc� tem ${idade} anos.`)
}

calcularIdade();
