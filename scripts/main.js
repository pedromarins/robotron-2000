const controle = document.querySelectorAll('[data-controle')

controle.forEach((elemento) => {
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
  })

  console.log(elemento.parentNode)
})

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector('[data-contador]')

  if (operacao === '-' && peca.value > 0) {
    peca.value = parseInt(peca.value) - 1
  } else if (operacao === '+') {
    peca.value = parseInt(peca.value) + 1
  }
}
