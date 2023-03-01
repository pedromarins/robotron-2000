const controle = document.querySelectorAll('.controle-ajuste');

for( let i in controle){

    if(i % 2 == 0 || i == 0){
        let valor= parseInt(controle[i].nextElementSibling.value);
        controle[i].onclick = () => controle[i].nextElementSibling.value = `${parseInt(controle[i].nextElementSibling.value) -1}`;
    }else{
        controle[i].onclick = () => controle[i].previousElementSibling.value =  `${parseInt(controle[i].previousElementSibling.value) + 1}`; 
    }
}