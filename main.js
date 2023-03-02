const controle = document.querySelectorAll('.controle-ajuste');

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
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const estatisticas = document.querySelectorAll("[data-estatistica]");
console.log(estatisticas)

const calcular = (ctr, contador) => {
    const tipoPeca = ctr.parentNode.parentNode.querySelector("[data-peca]").dataset.peca;
    const operador = ctr.dataset.controle;
    atualizaEstatisticas(tipoPeca, operador)
    return operacao(operador, contador);
}

const operacao = (operador, valor, add = 1) => {
    return operador == '-'? valor -= add: valor += add;
}


const atualizaEstatisticas = (tipoPeca, operador) => {
    estatisticas.forEach(estatistica => {
        const caracterista = estatistica.dataset.estatistica;
        console.log(pecas[tipoPeca][caracterista])
        estatistica.textContent = operacao(operador, parseInt(estatistica.textContent), pecas[tipoPeca][caracterista]);
    })
}

controle.forEach((ctr) => {
    const contador = ctr.parentNode.querySelector(".controle-contador");
    ctr.onclick = () => contador.value = `${calcular(ctr, parseInt(contador.value))}`;
})
