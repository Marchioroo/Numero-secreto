window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoChute = document.getElementById('chute')
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()
recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute)
    verificaSeOChutePossueValorValido(chute)
    gameOver(chute)
    
}

function gameOver(chute){
    if(chute === "Game Over."){
        document.body.innerHTML = `
       <h1> Game Over</h1><br>
       <h2> Você decidiu finalizar o game, quer tentar de novo?</h2>
       <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>`
    }
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div> Você disse: </div>
    <span class="box">${chute} </span>
    `
}
recognition.addEventListener('end', () =>recognition.start())


