function verificaSeOChutePossueValorValido (chute){
const numero = +chute;


if(chuteForInvalido(numero)){
elementoChute.innerHTML += '<div> Valor inválido </div>'
 return
}

if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
    elementoChute.innerHTML += `<div>Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
}

if(numero === numeroSecreto){
    document.body.innerHTML = `
    <h1>Parabéns você acertou!</h1>
    <h3>O número secreto era ${numeroSecreto} </h3>
    <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>
    `
   
}else if(numero > numeroSecreto){
    elementoChute.innerHTML += `<div> O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
}else{
    elementoChute.innerHTML += `<div> O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
}

}
function chuteForInvalido(numero){
return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}
document.body.addEventListener('click', (e) =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})