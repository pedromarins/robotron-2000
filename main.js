const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((ctr) =>{
    console.log(ctr.innerHTML);
     if(ctr.innerHTML == '-'){
        console.log(ctr.nextElementSibling.value)
        ctr.onclick = () => ctr.nextElementSibling.value = `${parseInt(ctr.nextElementSibling.value) -1}`;
    }else{
        ctr.onclick = () => ctr.previousElementSibling.value =  `${parseInt(ctr.previousElementSibling.value) + 1}`; 
    }
})