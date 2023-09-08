const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", () => {
    console.log('Cliquei no robô')
})

function diz_Oi(nome) {
    console.log('Oi ' + nome)
    bem_vindo()
}
function bem_vindo() {
    console.log('Bem-vindo ao Robotron 2000')
}

diz_Oi("Sérgio")
