const controle = document.querySelectorAll('.controle-ajuste');

const operacao = (operador, contador) =>{
    return operador == '-'? contador -= 1 : contador +=1;
}
controle.forEach((ctr) =>{
    const operador = ctr.dataset.controle;
    const contador = ctr.parentNode.querySelector(".controle-contador")
    ctr.onclick = () => contador.value = `${operacao(operador, parseInt(contador.value))}`
})
