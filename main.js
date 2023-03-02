const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((ctr) =>{
    const contador = ctr.parentNode.querySelector(".controle-contador")
     if(ctr.innerHTML == '-'){
        ctr.onclick = () => contador.value = `${parseInt(contador.value) -1}`;
    }else{
        ctr.onclick = () => contador.value =  `${parseInt(contador.value) + 1}`; 
    }
})