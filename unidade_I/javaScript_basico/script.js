function carregarDiv(){
    let divH1 = document.getElementById("nome_cerveja")
    divH1.classList.toggle('hide')
    divH1.style.transition = '20s'
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", carregarDiv)