// variáveis de dimensões máximas da tela, para que os objetos apresentados aleatoriamente não saiam da área visível do usuário
var nAlturaMaxima = 0
var nLarguraMaxima = 0
var nVidaAtual = 1
var nTempoDeJogo = 5
var oMosquitoNaTela
var oCronometro = setInterval( function() {	
	
	--nTempoDeJogo
	if ( nTempoDeJogo < 0) {
		clearInterval(oCronometro)
		clearInterval(oMosquitoNaTela)
		alert('vitoria')
	} else {
		document.getElementById('cronometro').innerHTML = nTempoDeJogo
	} }, 	1000)


// inicialização da aplicação
function iniciaAplicacao() {
	ajustaTamanhoPalcoJogo()
	criaNovoMosquito()
}


// ler tamanhos da tela visível
function ajustaTamanhoPalcoJogo() {
	nAlturaMaxima = window.innerHeight
	nLarguraMaxima = window.innerWidth
}

// define um tamanho aleatório para o mosquito
function tamanhoMosquito() {
	var cTamanho = Math.floor( Math.random() * 3 )
	var cClasseRet = ''

	switch ( cTamanho )  {
		case 0:
			cClasseRet = 'mosquito1'
			break
		case 1:
			cClasseRet = 'mosquito2'
			break
		case 2:
			cClasseRet = 'mosquito3'
	}
	return cClasseRet
}

// define o lado para o qual o mosquito está olhando
function ladoMosquito () {
	var nLado = Math.floor( Math.random() * 2 )
	var cRetorno = ''

	if ( nLado == 1 ) {
		cRetorno = 'ladoa'
	} else {
		cRetorno = 'ladob'
	}
	return cRetorno
}

// cria um mosquito na tela, em posição randômica
function criaNovoMosquito() {

	// remover o mosquito anterior, caso exista
	if (document.getElementById('mosquito') ) {	
		document.getElementById('mosquito').remove()

		if ( nVidaAtual > 3) {
			window.location.href = 'fim-de-jogo.html'
		} else {
			document.getElementById('v' + nVidaAtual++).src = "imagens/coracao_vazio.png"
		}
	}

	var nPosicaoX = Math.floor(Math.random() * ( nLarguraMaxima - 90 ) )
	var nPosicaoY = Math.floor(Math.random() * ( nAlturaMaxima - 90 ) )

	var novoMosquito = document.createElement('img')
	novoMosquito.src = "imagens/mosca.png"
	novoMosquito.style.left = nPosicaoX + 'px'
	novoMosquito.style.top = nPosicaoY + 'px'
	novoMosquito.style.position = 'absolute'
	novoMosquito.className = tamanhoMosquito() + ' ' + ladoMosquito()
	novoMosquito.id = 'mosquito'
	novoMosquito.onclick = function() {
							this.remove()
							}

	document.body.appendChild(novoMosquito)
}


// Faz o start da aplicação
iniciaAplicacao()