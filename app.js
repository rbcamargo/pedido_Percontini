//var img = document.querySelector("#imagem");

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo da Vida');
    exibirTextoNaTela('p', 'Quer namorar comigo mozao?');
}

exibirMensagemInicial();

function verificarResposta() {
    let resposta = document.querySelector('input').value;
    //var img = document.getElementById('imagem');
  
    
    if (resposta.toLowerCase() === 'sim') {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Acho bem bom mesmo!');
        document.getElementById('reiniciar').removeAttribute('disabled');

        } else {
            exibirTextoNaTela('p', 'Vai namorar SIM! Bota SIM ai, vai!');
           // img.setAttribute('src', "./img/principal.png\errou.png");   
           // img.setAttribute('src', './img/principal.png\errou.png');

        }
        limparCampo();
    }

function limparCampo() {
    resposta = document.querySelector('input');
    resposta.value = '';
}

function reiniciarJogo() {
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







