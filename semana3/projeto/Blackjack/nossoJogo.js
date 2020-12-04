/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
    const cartaUsuario1 = comprarCarta()
    const cartaUsuario2 = comprarCarta()
    const cartaComputador1 = comprarCarta()
    const cartaComputador2 = comprarCarta()
    const resultadoUsuario = (cartaUsuario1.valor + cartaUsuario2.valor)
    const resultadoComputador = (cartaComputador1.valor + cartaComputador2.valor)

    console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${resultadoUsuario}`)
    console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${resultadoComputador}`)
    if (resultadoUsuario > resultadoComputador) {
        console.log("O usuário ganhou!")
    } else if (resultadoUsuario < resultadoComputador) {
        console.log("O computador ganhou!")
    } else
        console.log("Empate!")
} else {
    console.log("O jogo acabou!")
}