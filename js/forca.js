let tentativas = 6;
let listaDinamica = [];
let palavraSorteada;
let palavraCategoria;
const palavras = [
    palavra001 = { nome: "IRLANDA", categoria: "LUGARES" },
    palavra002 = { nome: "EQUADOR", categoria: "LUGARES" },
    palavra003 = { nome: "BRASIL", categoria: "LUGARES" },
    palavra004 = { nome: "JAPÃO", categoria: "LUGARES" },
    palavra005 = { nome: "ALEMANHA", categoria: "LUGARES" },
    palavra006 = { nome: "ITÁLIA", categoria: "LUGARES" },
    palavra007 = { nome: "EGITO", categoria: "LUGARES" },
    palavra008 = { nome: "CANADÁ", categoria: "LUGARES" },
    palavra009 = { nome: "AUSTRÁLIA", categoria: "LUGARES" },
    palavra010 = { nome: "MÉXICO", categoria: "LUGARES" },
    palavra011 = { nome: "CACHORRO", categoria: "ANIMAIS" },
    palavra012 = { nome: "GATO", categoria: "ANIMAIS" },
    palavra013 = { nome: "LEÃO", categoria: "ANIMAIS" },
    palavra014 = { nome: "ELEFANTE", categoria: "ANIMAIS" },
    palavra015 = { nome: "CAVALO", categoria: "ANIMAIS" },
    palavra016 = { nome: "TIGRE", categoria: "ANIMAIS" },
    palavra017 = { nome: "PÁSSARO", categoria: "ANIMAIS" },
    palavra018 = { nome: "PEIXE", categoria: "ANIMAIS" },
    palavra019 = { nome: "MACACO", categoria: "ANIMAIS" },
    palavra020 = { nome: "PANDA", categoria: "ANIMAIS" },
    palavra021 = { nome: "CARRO", categoria: "TRANSPORTE" },
    palavra022 = { nome: "AVIÃO", categoria: "TRANSPORTE" },
    palavra023 = { nome: "MOTO", categoria: "TRANSPORTE" },
    palavra024 = { nome: "ÔNIBUS", categoria: "TRANSPORTE" },
    palavra025 = { nome: "BARCO", categoria: "TRANSPORTE" },
    palavra026 = { nome: "TREM", categoria: "TRANSPORTE" },
    palavra027 = { nome: "BICICLETA", categoria: "TRANSPORTE" },
    palavra028 = { nome: "NAVIO", categoria: "TRANSPORTE" },
    palavra029 = { nome: "METRÔ", categoria: "TRANSPORTE" },
    palavra030 = { nome: "PATINETE", categoria: "TRANSPORTE" },
    palavra031 = { nome: "MESA", categoria: "OBJETOS" },
    palavra032 = { nome: "CADEIRA", categoria: "OBJETOS" },
    palavra033 = { nome: "LIVRO", categoria: "OBJETOS" },
    palavra034 = { nome: "TELEVISÃO", categoria: "OBJETOS" },
    palavra035 = { nome: "CELULAR", categoria: "OBJETOS" },
    palavra036 = { nome: "LÂMPADA", categoria: "OBJETOS" },
    palavra037 = { nome: "SOFÁ", categoria: "OBJETOS" },
    palavra038 = { nome: "RELÓGIO", categoria: "OBJETOS" },
    palavra039 = { nome: "GARRAFA", categoria: "OBJETOS" },
    palavra040 = { nome: "COMPUTADOR", categoria: "OBJETOS" },
    palavra041 = { nome: "PIZZA", categoria: "ALIMENTOS" },
    palavra042 = { nome: "CHOCOLATE", categoria: "ALIMENTOS" },
    palavra043 = { nome: "SORVETE", categoria: "ALIMENTOS" },
    palavra044 = { nome: "HAMBÚRGUER", categoria: "ALIMENTOS" },
    palavra045 = { nome: "ARROZ", categoria: "ALIMENTOS" },
    palavra046 = { nome: "FEIJÃO", categoria: "ALIMENTOS" },
    palavra047 = { nome: "FRANGO", categoria: "ALIMENTOS" },
    palavra048 = { nome: "MAÇÃ", categoria: "ALIMENTOS" },
    palavra049 = { nome: "BANANA", categoria: "ALIMENTOS" },
    palavra050 = { nome: "MORANGO", categoria: "ALIMENTOS" }
];

function criarResposta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSorteada = palavras[indexPalavra].nome;
    palavraCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSorteada)
    console.log(palavraCategoria)

}
criarResposta();

function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraCategoria;

    const palavraTela = document.getElementById("resposta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}
montarPalavraNaTela();

function verificaLetreEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;


    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparalista(letra);
        montarPalavraNaTela();

    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalista(letra) {
    const pos = palavraSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--
        //aparecer imagem
        carregaImagemForca()
        //verificar se ainda tem tentativas
        if (tentativas == 0) {
            abreModal("Opss!", "Não foi dessa vez... A palavra secreta era <br>" + palavraSorteada);
        }
    }
    else {
        for (i = 0; i < palavraSorteada.length; i++) {
            if (palavraSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSorteada.length; i++) {
        if (palavraSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }
    if (vitoria == true) {
        tentativas = 0;

        abreModal("Parabenss!", "Você acertou!!!");
    }
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./imgs/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./imgs/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./imgs/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./imgs/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./imgs/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./imgs/forca06.png')";
            break;
        default: document.getElementById("imagem").style.background = "url(./imgs/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;
    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    let modal = new bootstrap.Modal(document.getElementById('myModal'))
    modal.show();
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function reiniciar() {
    location.reload(true);
})

document.getElementById('btn-fechar').addEventListener('click', function () {
    // Fecha o modal
    const modal = bootstrap.Modal.getInstance(document.querySelector('.modal')); // Substitua '.modal' pelo seletor do seu modal
    modal.hide();

    // Reinicia a página
    setTimeout(() => {
        location.reload();
    }, 500); // Pequeno atraso para garantir o fechamento do modal
});