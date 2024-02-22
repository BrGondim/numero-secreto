let listadeNumerosSorteados = {};
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoi.speak(texto,'Brasilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou');
        exibirTextoNaTela('p',`Ae, menó. Tu acertou o número secreto em ${tentativas} tentativas`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto ){
        exibirTextoNaTela('h1','Erroooooou');
        exibirTextoNaTela('p','Qual foi, jovem? Chuta baixo rapá');
    }else{
        exibirTextoNaTela('h1','Errooooou');
        exibirTextoNaTela('p','Tenta mais alto mas tenta baixo tá, nengue.');
    }
    tentativas++
    limparCampo()
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1); 
    let quantidadeDeElementosNalista = listadeNumerosSorteados.lenght;
    
    if(quantidadeDeElementosNalista == numeroLimite){
        listadeNumerosSorteados = [];
    }

    if(listadeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
    } else{
        listadeNumerosSorteados.push(numeroEscolhido);
        console.log(listadeNumerosSorteados)
        return numeroEscolhido;     
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ';'
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();