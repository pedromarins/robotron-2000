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

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca)
        //atualizaEstatisticas(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca)
    })
})

function manipulaDados (operacao, controle, peca) {

    const contador = controle.querySelector("[data-contador]")

    if(operacao === "-") {  
        if (parseInt(contador.value) >= 1) {
            contador.value = parseInt(contador.value) - 1
            estatistica.forEach( (elemento) => {
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
            })
        }
        return
    } else if(operacao === "+") {
        contador.value = parseInt(contador.value) + 1
        estatistica.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    }
}

/*
function atualizaEstatisticas(operacao, controle, peca) {  

    const contador = controle.querySelector("[data-contador]")

    if(operacao === "-") {  
        if (parseInt(contador.value) >= 0){
            estatistica.forEach( (elemento) => {
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
            })
        }
        return
    } else if(operacao === "+") {
        estatistica.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    }
    console.log(contador.value);
    
}
*/