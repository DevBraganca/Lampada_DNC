var lamp = window.document.getElementById('lampada')

function estaQuebrada() {
    return lamp.src.indexOf('/img/quebrada.svg') > -1
}

function Ligar(){
    if (!estaQuebrada()){
        lamp.src ='/img/ligada.svg'}
}
function Desligar(){
    if (!estaQuebrada()){
        lamp.src ='/img/desligada.svg'}
}
function Quebrada(){
    lamp.src = '/img/quebrada.svg'
}