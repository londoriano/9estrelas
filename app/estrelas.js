const estrelas = document.getElementById('estrelas')
fazEstrelas(contador);

function fazEstrelas(x) {

    estrelas.innerHTML = "";

    for (let i = 0; i < x; i++) {
        const estrela = document.createElement("i");
        estrela.classList.add("fa-solid", "fa-star", "fa-sm");
        estrelas.appendChild(estrela);
    }

    let diferenca = (10 - x);

    console.log(diferenca)

    for (let i = diferenca; i > 0; i--) {
        const estrelaVazia = document.createElement("i");
        estrelaVazia.classList.add("fa-regular", "fa-star", "fa-sm");
        estrelas.appendChild(estrelaVazia);
    }
}
