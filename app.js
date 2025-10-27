let tentativas = 1;
const listaNumerosSorteados = [];
const numeroLimite = 10;
let numeroSecreto = gerarNumeroAletorio();
mensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial (tag, texto) {
    exibirTextoNaTela('h1','ADIVINHE O NÚMERO SECRETO');
    exibirTextoNaTela('p','Descubra o número secreto entre 1 e 10!');
}

function limparCampoDeInput() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAletorio() {
    let numeroSorteado = parseInt(Math.random() * numeroLimite +1);
    let quantidadeLista = listaNumerosSorteados.length;

    if (quantidadeLista == numeroLimite) {
    listaNumerosSorteados = []
    }



    if(listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAletorio();
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
            let palavaTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

            let mensagemTentativas = `Você acertou com ${tentativas} ${palavaTentativas}!`;

            document.getElementById('reiniciar').removeAttribute('disabled');
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute} Tente novamente!`)
        } else {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute} Tente novamente!`)
        }

        tentativas++;
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAletorio();
    limparCampoDeInput();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

