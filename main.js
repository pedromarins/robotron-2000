const braco = document.querySelector("#braco")
const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach ((element) => {
    element.addEventListener("click", (event) => {
       operador = event.target.textContent
       manipulaDados (operador)
    } )
})


function manipulaDados (operador) {
    if (operador === "-") {
        braco.value = parseInt (braco.value) - 1

    } else {
        braco.value = parseInt (braco.value) + 1
    }
}
