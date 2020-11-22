const botaoArir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');
const executarBotal = document.querySelector('.executarAux')




function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add('ativo');
}

function fecharModal() {

    containerModal.classList.toggle('ativo');
    
}

botaoArir.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fecharModal);
executarBotal.addEventListener('click', abrirModal);