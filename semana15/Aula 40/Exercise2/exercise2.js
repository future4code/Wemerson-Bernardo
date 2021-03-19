
red = '\u001b[31m'

const operacao = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])

switch (operacao) {
    case 'add':
        console.log(red + valor1 + valor2)
        break;
    case 'sub':
        console.log(red + valor1 - valor2)
        break;
    case 'mult':
        console.log(red + valor1 * valor2)
        break;
    case 'div':
        console.log(red + valor1 / valor2)
        break;
}