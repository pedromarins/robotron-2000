// const subtrair = document.querySelector("#subtrair"); refatorado no ForEach. Na funcao manipulaDados, as operacoes somar e subtrair ja sao as condicoes if e else.
// const somar = document.querySelector("#somar"); refatorado no ForEach. Na funcao manipulaDados, as operacoes somar e subtrair ja sao as condicoes if e else.
// const braco = document.querySelector("#braco"); refatorado na function manipulaDados(... , controle)

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
});

// somar.addEventListener("click", () => {manipulaDados("somar")}); <------ refatorado no ForEach. Na funcao manipulaDados, as operacoes somar e subtrair ja sao as condicoes if e else.
// subtrair.addEventListener("click", () => {manipulaDados("subtrair")}); <------ refatorado no ForEach. Na funcao manipulaDados, as operacoes somar e subtrair ja sao as condicoes if e else.

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}