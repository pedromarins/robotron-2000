const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const roboImg = document.querySelector("[data-robo]")

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
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })

})

function manipulaDados (operacao, controle) {
    
   const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value  = parseInt(peca.value) - 1
    } else {
        peca.value  = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas (peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

roboImg.addEventListener("click", (evento) => {

   let corAtual = evento.target.src.split("img");
   
   let novaCor = robotron.indexOf("img"+corAtual[1]) === 5 ? 0 : robotron.indexOf("img"+corAtual[1]) + 1

   evento.target.src = robotron.at(novaCor) 
})

const robotron = ["img/robotron.png","img/Robotron-Branco.png","img/Robotron-Amarelo.png", "img/Robotron-Preto.png", 
    "img/Robotron-Rosa.png","img/Robotron-Vermelho.png"]


