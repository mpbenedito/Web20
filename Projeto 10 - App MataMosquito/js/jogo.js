// variáveis de dimensões máximas da tela, para que os objetos apresentados aleatoriamente não saiam da área visível do usuário
var nAlturaMaxima = 0
var nLarguraMaxima = 0

// inicialização da aplicação
function iniciaAplicacao() {
    ajustaTamanhoPalcoJogo()
}

// ler tamanhos da tela visível
function ajustaTamanhoPalcoJogo() {
    nAlturaMaxima = window.innerHeight
    nLarguraMaxima = window.innerWidth

    console.log(nAlturaMaxima, nLarguraMaxima)
}
