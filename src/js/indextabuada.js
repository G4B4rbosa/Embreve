var acerto = 0;
var erro = 0;
var campo1;
var campo2;
var campoResposta;
var valor1;
var valor2;
var total;
var divAcertos;
var divErros;

divErros = document.querySelector('#divErros');
divAcertos = document.querySelector('#divAcertos');
campo1 = document.querySelector('#txtValor1');
campo2 = document.querySelector('#txtValor2');
campoResposta = document.querySelector('#txtResposta');

campoResposta.addEventListener('keyup', (Event) => {
    if (Event.key == "Enter") {
        Conferir();
        Sortear();
        document.getElementById('txtResposta').value = '';
    }
});

desabilitarBotaoClicado();

function Sortear() {
    valor1 = Math.floor((Math.random() * 10));
    campo1.value = valor1;
    valor2 = Math.floor((Math.random() * 10));
    campo2.value = valor2;
}

function Conferir() {
    Resposta = isNaN(campoResposta.value);
    console.log(Resposta);
    total = valor1 * valor2;
    if (Resposta == false && Resposta >= 0) {
        if (total == campoResposta.value) {
            acerto++;
            divAcertos.innerHTML = acerto;
        } else {
            erro++;
            divErros.innerHTML = erro;
        }
    }
}


function desabilitarBotaoClicado() {
    const botoes = document.querySelectorAll('.botao');
    console.log(botoes);

    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            botao.classList.add('selecionado');
        });
    });
}
