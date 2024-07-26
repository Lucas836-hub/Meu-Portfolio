const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

let quantidadeDeProjetos = 4;

document.addEventListener("DOMContentLoaded", function () {
  mostrarProjetos(quantidadeDeProjetos);
});

btnMostrarProjetos.addEventListener('click', mostrarMaisProjetos)

function mostrarProjetos(quantidadeProjetos) {
  const projetos = document.querySelectorAll('.projeto');

  for (let i = 0; i < quantidadeProjetos; i++) {
    if (projetos[i]) {
      projetos[i].classList.add('ativo')
    }
  }
}

function mostrarMaisProjetos() {
  const quantidadeTotalProjetos = document.querySelectorAll('.projeto').length;
  quantidadeDeProjetos += 5; // Incrementa mais 5 projetos a serem mostrados
  mostrarProjetos(quantidadeDeProjetos);

  if (quantidadeDeProjetos >= quantidadeTotalProjetos) {
    btnMostrarProjetos.classList.add('remover') // Esconde o botão se todos os projetos estiverem sendo mostrados
  }
}
