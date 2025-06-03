Exercícios while

Primeiro:
let nome = prompt(&quot;digite seu nome:&quot;)
while (nome !== &quot;abel&quot;){
console.log (&quot;dados errados&quot;)
nome = prompt(&quot;digite seu nome:&quot;)
}
console.log(&quot;login efetuado&quot;)
segundo:
let senha = prompt(&quot;digite sua senha:&quot;)
while (senha !== &quot;1234&quot;){
console.log (&quot;dados errados&quot;)
senha = prompt(&quot;digite seu nome:&quot;)
}
console.log(&quot;login efetuado&quot;)

terceiro:
let senha = prompt(&quot;digite sua senha:&quot;)
while (senha !== &quot;1234&quot;){
console.log (&quot;dados errados&quot;)
senha = prompt(&quot;digite seu nome:&quot;)

}
let confirmação = prompt(&quot;confirme sua senha:&quot;)
while (confirmação !== &quot;1234&quot;){
console.log (&quot;dados errados&quot;)
confirmação = prompt(&quot;confirme sua senha:&quot;)

}
console.log(&quot;login efetuado&quot;)

quarto:
let usuario = prompt(&quot;digite seu nome:&quot;)
let senha = prompt(&quot;digite sua senha:&quot;)
while ( usuario !== &quot;admin&quot;){
console.log (&quot;dados errados&quot;)
usuario = prompt(&quot;digite seu nome:&quot;)
}
while (senha !== &quot;1234&quot;){
console.log (&quot;dados errados&quot;)
senha = prompt (&quot;digite sua senha:&quot;)
}

console.log(&quot;login efetuado&quot;)

quinta:
let usuario = prompt(&quot;digite seu nome:&quot;)
let senha = prompt(&quot;digite sua senha:&quot;)
while ( usuario !== &quot;admin&quot;){
console.log (&quot;usuario ou senha incorretos&quot;)
usuario = prompt(&quot;digite seu nome:&quot;)
}
while (senha !== &quot;1234&quot;){
console.log (&quot;usuario ou senha incorretos&quot;)
senha = prompt (&quot;digite sua senha:&quot;)
}

console.log(&quot;login efetuado&quot;)

sexta:
let tentativas = 0
let usuario, senha
while (tentativas &lt; 3) {
usuario = prompt(&quot;Usuário:&quot;)
senha = Number(prompt(&quot;Senha:&quot;))
if (usuario === &quot;admin&quot; &amp;&amp; senha === 1234) {
console.log (&quot;Login realizado com sucesso!&quot;)
break
} else {
tentativas++
console.log (&quot;Usuário ou senha incorretos.&quot;)
}
}
if (tentativas &gt;= 3) {
console.log (&quot;Acesso bloqueado.&quot;)
}