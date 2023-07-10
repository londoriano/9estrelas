let contador = 0;

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML = '<div>Valor inválido. Tem certeza que isso foi um número?</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML = `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1>Acertou Mizerávi!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-novoJogo" onClick="recomecar()">Jogar novamente</button>

            <p class="contador" id="contador">Tentativas: ${contador}</p>
        `
    } else if (numero > numeroSecreto) {
        contador++
        document.getElementById("contador").innerText = "Tentativas: " + contador
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        contador++
        document.getElementById("contador").innerText = "Tentativas: " + contador
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

function recomecar(){
    window.location.reload();
}