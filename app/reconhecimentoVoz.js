const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'


recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
}

function microOn(){
    recognition.start()
    const micro = document.getElementById('micro')
    micro.innerHTML = 
    `<i class="fa-solid fa-ellipsis fa-beat"></i>`
}

recognition.addEventListener('end', microOff)

function microOff(){
    const micro = document.getElementById('micro')
    micro.innerHTML = 
    `<i class="fa-solid fa-microphone"></i></i>`
}