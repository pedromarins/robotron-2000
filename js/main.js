const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelector(".controle-ajuste")

somar.addEventListener("click", () => {manipulaDados("somar")})

subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

function manipulaDados(operacao) {
    if(operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}