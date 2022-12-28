const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
}) 


function manipulaDados(operacao, controle) {
    const braco = controle.querySelector("[data-contador]")
    
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1 
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}