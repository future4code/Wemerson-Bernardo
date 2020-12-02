/*              EXERCÍCIO 1 (Escrita de código)

Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?

//O teste realiza uma verificação para saber se o número é par ou ímpar. Então, qualquer número par terá resto
0 e passará no teste. O contrário com números ímpares que restam 1.

*/

/*              EXERCÍCIO 2 (Escrita de código)

O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a. Para que serve o código acima?

//O código acima trabalhar como um buscador de produtos (no caso frutas) e mostrando seu preço no final.

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

//"O preço da fruta Maça é R$2.25"

c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

//Possivelmente iria imprimir a os dados da Pêra e também os de default, já que o break está justamente nesta outra variável default.

*/

/*                      EXERCÍCIO 3 (Escrita de código)

Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a. O que a primeira linha está fazendo?

//A primeira linha está pedindo ao usuário para digitar um número.

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//O código acima trata-se de um pequeno código para saber se o número é maior que 0 sendo assim, caso seja maior,
o resultado será, no caso de 10: "Esse número passou no teste". Sendo -10 não exibiria a mensagem.

c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

Sim! Para qualquer número (ou não) inserido haverá um erro de sintaxe. A última linha do código está tentando
imprimir uma variável "mensagem" fora do seu escopo. A variável "mensagem" está na div filho e o console.log
está tendo-a imprimir na div pai, o que na regra dos escopos/blocos é estritamente impossível.
*/

/*              EXERCÍCIO 4 (Escrita de Código)

Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idade = Number(prompt("Informe sua idade"))

if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir")
} */

/*              EXERCÍCIO 5 (Escrita de Código)

Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

const turno = prompt("Em qual turno do dia você estuda? P.S: Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()

if (turno === "m") {
    console.log("Bom dia!")
} else if (turno == "v") {
    console.log("Boa tarde!")
} else if (turno == "n") {
    console.log("Boa noite!")
} else {
    console.log("Digite um turno válido! (M ou V ou N)")
}

*/

/*EXERCÍCIO 6

Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

const turno = prompt("Em qual turno do dia você estuda? P.S: Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()
switch (turno) {
    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Boa tarde!")
        break
    case "n":
        console.log("Boa noite!")
        break
    default:
        console.log("Digite um turno válido! (M ou V ou N")
}

*/
/*
              EXERCÍCIO 7 (Escrita de Código)

Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia ****e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("


const generoFilme = prompt("Digite o gênero do filme de sua preferência:").toLowerCase()
const valorIngresso = Number(prompt("Quantal o preço do ingresso?"))

if (generoFilme === "fantasia" && valorIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
*/

/*               DESAFIO 1

Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo `prompt` que snack ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "... com `[SNACK]`", trocando [SNACK] pelo que o usuário colocou no input.


const generoFilme = prompt("Digite o gênero do filme de sua preferência:").toLowerCase()
const valorIngresso = Number(prompt("Quantal o preço do ingresso?"))
const snack = prompt("Qual snack preferido vai acompanhar você neste filme?")

if (generoFilme === "fantasia" && valorIngresso < 15) {
    console.log("Bom filme!")
    console.log(`... com ${snack}`)
} else {
    console.log("Escolha outro filme :(")
}
*/