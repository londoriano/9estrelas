let contador = 9;

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML = '<div>Tem certeza que isso foi um número?</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML = `
        <div>Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        reproduzirAudio("/sons/win.wav");
        document.body.innerHTML = `
            <h1>Acertou! Parabéns!</h1>
            <h3>O número secreto era ${numeroSecreto}.</h3>
            <button id="jogar-novamente" class="btn-novoJogo" onClick="recomecar()">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        
        contador--;

        if (contador < 1) {
            reproduzirAudio("/sons/fail.wav");
            document.body.innerHTML = `
            <h1>Game Over!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-novoJogo" onClick="recomecar()">Jogar novamente</button>
        `
        }
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        contador--;

        if (contador < 1) {
            document.body.innerHTML = `
            <h1>Game Over!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-novoJogo" onClick="recomecar()">Jogar novamente</button>
        `

        }
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

    fazEstrelas(contador);
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function recomecar() {
    window.location.reload();
}
