// alert('olá'); exibe um pop-up

// const itemCiclope = document.getElementById('ciclope');
// console.log(itemCiclope);

const jogos = document.querySelectorAll('.jogo');
//console.log(jogos)

//passo 2

jogos.forEach((jogo) => {
    jogo.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }
        
        
        //passo 3 - verificar se ja existe jogo selecionado, se sim, remover a seleção
        removerSelecaoDojogo();
        
        jogo.classList.add('selecionado');

        //objetivo 2 - quando passar o mouse em cima do jogo na listagem, trocar a imagem, o nome e a descrição do jogo grande

        //passo 1 - pegar o elemento do jogo grande para adicionar as informações nele
        alterarImagemjogoSelecionado(jogo);

        // passo 3 - alterar o nome do jogo
        alterarNomejogoSelecionado(jogo);

        //passo 4 - alterar a descrição do jogo
        alterarDescricaojogo(jogo);

    })
})

function alterarDescricaojogo(jogo) {
    const descricaojogo = document.getElementById('descricao-jogo'); //ids não tem acentuação
    descricaojogo.innerText = jogo.getAttribute('data-description');
}

function alterarNomejogoSelecionado(jogo) {
    const nomejogo = document.getElementById('nome-jogo');
    //id não precisa de ponto
    //nomejogo.innerText = idjogo;
    nomejogo.innerText = jogo.getAttribute('data-name');
}

function alterarImagemjogoSelecionado(jogo) {
    const imagemjogoGrande = document.querySelector('.jogo-grande');
    // queryselector sim
    //passo 2- alterar a imagem jogo grande
    const idjogo = jogo.attributes.id.value;
    imagemjogoGrande.src = `./src/imagens/card-${idjogo}.png`;
    if (idjogo == 'tabuada') {
        imagemjogoGrande.src = `./src/imagens/card-${idjogo}.png`;
      } else {
        imagemjogoGrande.src = './src/imagens/embreve.gif';
      }
    //      ^ - concatenar
}

function removerSelecaoDojogo() {
    const jogoselecionado = document.querySelector('.selecionado');
    jogoselecionado.classList.remove('selecionado');
}
// arrow function () => {}
// addEventListener cria um evento que responde ao interagir com o objeto ('mouseenter'
