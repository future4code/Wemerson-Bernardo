//Acessamos os parâmetros conduzindo o arquivo ou o script que queremos rodar com um
//console.log(no caso de um arquivo) ou diretamente no script dentro do package.json.

blue = '\u001b[34m'

futureAge = Number(process.argv[3]) + 7

console.log(blue + `Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${futureAge}.`)