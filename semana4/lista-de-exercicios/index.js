//Exercícios de interpretação de código

/*Exercício 1: O código deste exercício mostra um função que solicita a cotação do dólar e, de acordo com
a quantidade de dinheiro que o usuário tem em dólares, o retorna a quantidade que seria em real brasileiro.*/

/*Exercício 2: Esta função solicita um tipo de investimento e calcula o rendimento do mesmo após sua aplicação.
Especificamente nesta simulação, há uma variação de 2 investimentos com valores distintos, que resultarão
nos seguintes dados:

Ações ----> novoMontante ----> (165)
Tesouro Direto ----> segundoMontante ----> (TIPO DE INVESTIMENTO INFORMADO INCORRETO!)
*/

/* Exercício 3: Dado alguns números em uma array e declaradas mais duas arrays vazias, a função faz com que
sejam separados números pares em uma array e não pares em outra. Neste resultado mostra-se a quantidade
de itens que existem, foram para a array par e para a não par:

(Quantidade total de números 14)
(6) ----> Números pares
(8) ----> Números impares
*/

/* Exercício 4: Expostos alguns números aleatórios na array, o código determina uma variável sendo infinity
e a outra sendo 0. A estrutura dentro da condição pede para que se um número for menor que o infinity
seja este impresso. Já na outra condição diz que seja impresso um número maior que zero (no caso seria
o maior número maior que zero).

console.log(numero1) ----> -10;
console.log(numero2) ----> 1590;
*/

//Exercícios de Lógica de Programação

/*      
Exercício 1: 
- While:

    let numero = 0
    while (numero < 10) {
        console.log(numero)

        i++
    }

-For:

for (let numero = 0; numero < 10; numero++) {
    console.log(numero)
}    

-For Of:

let numeros = [20, 12, 4, 296, 31]

for (let numero of numeros) {
    console.log(numero)
}*/

/*Exercício 2: 

a) `booleano1 && booleano2 && !booleano4`
        //FALSE

b) `(booleano1 && booleano2) || !booleano3`
        //FALSE

c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`
        //TRUE

d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`
        //TRUE

e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
        //TRUE
*/

/*
Exercício 3:

const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}

Este código funciona?
//Funciona mas não para a execução correta em que foi solicitado.

Por quê? 
//A função está retornando menor ou igual, o certo seria menor para não gerar um valor adicional, falta o 
incremento para iterar a lista e a definição de um número para a variável quantidadeDeNumerosPares.

Caso não funcione, corrija a implementação dele.

let quantidadeDeNumerosPares = 5
let i = 0
while (i < quantidadeDeNumerosPares) {
    console.log(i * 2)
    i++;
}

*/
/*
Exercício 5 

let numero1 = 15;
let numero2 = 30;

let maior = numero1 > numero2 ? console.log(`O maior é: ${numero1}`) : console.log(`O maior é: ${numero2}`);
let divisao = numero1 % numero2 === 0 ? console.log(`${numero1} é divisível por ${numero2}`) : console.log(`${numero1} não é divisível por ${numero2}`)

if (numero1 > numero2) {
    let diferenca = numero1 - numero2
    console.log(`A diferença entre eles é ${diferenca}`)
} else {
    let diferenca2 = numero2 - numero1;
    console.log(`A diferença entre eles é ${diferenca2}`)
}

} */

//Exercícios de Função

/*
Exercício 2: 

let alerta = () => {
    alert("Hello Labenu!")
}

console.log(alerta())

*/

//Exercícios de Objetos

/* 
Exercício 1:

    -Array: É um estrutura que permite que armazenemos vários elementos de forma mais organizada, podendo
    ser acessados de forma mais consisa e rápida.

    -Objetos: São estruturas mais complexas e ainda mais organizadas que arrays. Também podemos o acessar 
    de forma ágil e com uma manipulação objetiva, repassando uma visão de forma mais real ao usuário.

    A utilização de arrays e objetos se dão quando precisamos trabalhar com dados extensos e/ou precisamos
    dar mais precisão as informações. O uso de ambos é importante 
*/
/*
Exercício 2:

let lado1 = 10;
let lado2 = 20;

function criaRetangulo(info1, info2) {
    let informacoes = { largura: info1, altura: info2, perimetro: 2 * (info1 + info2), area: info1 * info2 }
    return informacoes
}

console.log(criaRetangulo(lado1, lado2))
*/