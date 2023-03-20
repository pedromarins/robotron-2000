const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

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

controle.forEach(element => {
    element.addEventListener("click", (evento) => {
        calc(evento.target.dataset.controle, evento.target.parentNode)
        statsCalc(evento.target.dataset.peca)
    })
    
});


function calc(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }
    else {
        peca.value = parseInt(peca.value) + 1
    }
}

function statsCalc (peca) {
    estatistica.forEach(element => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica]
    })

}