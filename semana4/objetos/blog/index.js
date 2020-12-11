function adicionarPost() {
    const containerPost = document.getElementById("container-de-posts")
    const tituloPost = document.getElementById("titulo-post")
    const autorPost = document.getElementById("autor-post")
    const conteudoPost = document.getElementById("conteudo-post")
    containerPost.innerHTML += `<p>${tituloPost.value}</p>`
    containerPost.innerHTML += `<br>${autorPost.value}</br>`
    containerPost.innerHTML += `<p2>${conteudoPost.value}</p2>`
}

function pressionarBotao(evento) {
    console.log(evento)
    adicionarPost()
}