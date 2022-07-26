/*  Temos uma lista de cores disponibilizada no código abaixo. Você irá criar um botão que, ao ser clicado, faz aparecer
  esta lista, e também criará um segundo botão que, ao ser clicado, faz com que a lista de cores volte a sumir. */

function mostraTintas () {
  document.querySelector(".lista").style.display = "block";
}

function escondeTintas() {
  document.querySelector(".lista").style.display = "none";
}