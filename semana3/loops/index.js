/*        EXERCÍCIO 1 (Interpretação de código)

O que o código abaixo está fazendo? Qual o resultado impresso no console?


let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) 

  //O console irá imprimir os números de 0 a 4.

*/

/*        EXERCÍCIO 2 (Interpretação de código)
Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a. O que vai ser impresso no console?

Irá imprimir os números acima de 18. No caso serão impressos os números 19, 21, 23, 25, 27 e 30.

b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

Sim é o suficiente. A seguinte adequação seria o suficiente:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let maior = 0

for (numero of lista) {
    if (numero > 18) {
        maior = numero
        console.log(maior)
    }
}

*/

/*        DESAFIO 1 (Interpretação de código)

Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? 

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

//0
//00
//000
//0000

*/

/*        EXERCÍCIO 3 (Exercício de escrita de código)

Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

a. Escreva um programa que:

- Imprima cada um dos valores do array original:

const arrayOriginal = [4, 9, 12, 14, 27, 21, 43, 52, 60]
let maior = 0

for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i])
}

b. Escreva um programa que:

- Imprima cada um dos valores do array original divididos por 10:

const arrayOriginal = [4, 9, 12, 14, 27, 21, 43, 52, 60]
let maior = 0

for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i] / 10)
}

c. Escreva um programa que:

- Crie um novo array contendo, somente, os números pares do array original:

let arrayOriginal = [4, 9, 12, 14, 27, 21, 43, 52, 60]
let par = 0

for (let num of arrayOriginal) {
    if (num % 2 === 0) {
        par = num
        console.log(par)
    }
}

- **Imprima** esse novo array

d. Escreva um programa que:

- Crie um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`":

const arrayOriginal = [4, 9, 12, 14, 27, 21, 43, 52, 60]
let maior = 0

for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(`O elemento do index ${[i]} é: ${arrayOriginal[i]}`)
}

- **Imprima** este novo array

e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

const arrayOriginal = [4, 9, 12, 14, 27, 21, 43, 52, 60]
let valorMaximo = arrayOriginal[8]
let valorMinimo = arrayOriginal[0]

for (let num of arrayOriginal) {
    if (num > valorMaximo){
    valorMaximo = num
    } 
    if (num < valorMinimo) {
      valorMinimo = num
    }
    console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
}

*/