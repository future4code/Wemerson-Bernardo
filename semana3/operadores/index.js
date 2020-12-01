/*1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    const bool1 = true
    const bool2 = false
    const bool3 = true

    let resultado = bool1 && bool2
    console.log("a. ", resultado) //False

    resultado = bool1 && bool2 && bool3
    console.log("b. ", resultado) //False

    resultado = !resultado && (bool1 || bool1)
    console.log("c. ", resultado) //True

    console.log("e. ", typeof resultado) //Boolean */

/*2.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

let array
console.log('a. ', array) //undefined

array = null
console.log('b. ', array) //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //11

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array) //[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) //9 */

/*1. Faça um programa que:
a. Pergunte a idade do usuário
b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    Dica: não se esqueça de converter as respostas para o tipo número

    c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)

let idade = prompt("Qual a sua idade?")
let outraIdade = prompt("Qual a idade do seu melhor amigo(a)?")
let idades = Number(idade) > Number(outraIdade)
console.log(`Sua idade é maior do que a do seu melhor amigo? ${idades}`)*/

/*2. Faça um programa que:
a. Peça ao usuário que insira um número **par**.

    Dica: não se esqueça de converter a resposta para o tipo número

    b. Imprima na tela **o resto da divisão** desse número por 2.

let numeroPar = prompt("Insira um número par: ")
let resultado = Number(numeroPar) % 2
console.log(resultado)

    c. Teste o programa com diversos números pares. Você notou um padrão? //Em qualquer número par o resultado é 0
    d. O que acontece se o usuário inserir um número ímpar? //Em qualquer número ímpar o resultado é 1 */

/*
                3. Faça um programa, seguindo os passos:

a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c. Imprima o array na tela
d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e. Remova da lista o item de índice que o usuário escolheu.
f. Imprima o array na tela

let listaDeTarefas = []

listaDeTarefas.push(prompt("Qual a primeira tarefa que você precisa fazer hoje?"))
listaDeTarefas.push(prompt("Qual a segunda tarefa que você precisa fazer hoje?"))
listaDeTarefas.push(prompt("Qual a terceira tarefa que você precisa fazer hoje?"))

console.log(listaDeTarefas)

let indice = prompt("Digite o índice da tarefa que você já realizou (0, 1 ou 2)!")

const indiceNumber = Number(indice)

listaDeTarefas.splice(indiceNumber, 1)

console.log(listaDeTarefas)*/

/*4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nome = prompt("Qual o seu nome?")
const email = prompt("Digite seu e-mail!")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}`)*/