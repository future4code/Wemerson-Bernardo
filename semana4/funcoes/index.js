/*

                EXERCÍCIO 1 (Interpretação de código)

Leia o código abaixo:

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a. O que vai ser impresso no console?

    //10
    //50

b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

//Não apareceria nenhum resultado, já que o console.log serve para mostrar algo/alguma coisa no console do navegador.

*/

/* 
            EXERCÍCIO 2 (Interpretação de código)

Leia o código abaixo:

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)

a. Explicite quais são as saídas impressas no console

//Darvas
//Caio

// A função está ordenando que o índice seja contado até o valor menor que 2, sendo o índice 0 e 1 apresentados no console.

b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console? 

//Amanda
//Caio

// Seguiria a mesma lógica acima e digitaria os nomes que justamente são a quantidade de índices necessários.
*/

/*
                EXERCÍCIO 3 (Interpretação de código)

O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

	const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    arrayFinal.push(x * x)
		}
  }

  return arrayFinal;
}

//Aparentemente a função está selecionando os números pares de uma array, multiplicando-os e, posteriormente, inserindo-os em uma outra array.
Uma forma interessante para ficar mais bem explicitado seria a segunte:

const multiplosPares = (array) => {
  let novaArray = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    novaArray.push(x * x)
		}
  }

  return novaArray;
}

*/

/* 
                EXERCÍCIO 4 (Escrita de Código)

Escreva as funções explicadas abaixo:

a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprimir essa mensagem.

//  let quemSouEu = () => {
    console.log(`Eu sou Wemerson, tenho 23 anos, faço a dobradinha Fortaleza/Horizonte (CE) e sou estudante.`)
}

const informacoes = quemSouEu()

b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

let quemSouEu = () => {
    let nome = prompt("Digite seu nome")
    let idade = Number(prompt("Agora digite sua idade"))
    let cidade = prompt("Em qual cidade você vive atualmente?")
    let estudante = prompt("Você é estudante? (Responda com sim ou não)").toLowerCase()
    switch (estudante) {
        case "sim":
            estudante = "sou"
            break
        case "não":
            estudante = "não sou"
            break
    }

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante.`)
}

const informacoes = quemSouEu()

*/

/* Escreva as funções explicadas abaixo:

a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

//  let somaDosNumeros = (numero1, numero2) => {
    numero1 = Number(prompt("Insira um número"))
    numero2 = Number(prompt("Insira outro número"))

    let soma = (numero1 + numero2)
    return soma
}

const resultado = somaDosNumeros()
console.log(resultado)

b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

//  let somaDosNumeros = (numero1, numero2) => {
    numero1 = Number(prompt("Insira um número"))
    numero2 = Number(prompt("Insira outro número"))

    if (numero1 > numero2) {
        verificadorNumeros = "Maior"
    } else if (numero1 === numero2) {
        verificadorNumeros = "Igual"
    } else {
        verificadorNumeros = "O teste só mostra valores Maiores ou Iguais."
    }
    return verificadorNumeros
    resultado = verificadorNumeros

}

const resultado = somaDosNumeros()
console.log(resultado)

c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)

*/

/*                EXERCICIO 6

Para os itens a seguir, considere o seguinte array para os seus testes:

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par.

*/