export default function slide(){
    const slideGeral = document.querySelector('[data-slide="geral"]')
const slideLista = document.querySelector('[data-slide="lista"]')
const slideItem = document.querySelectorAll('[data-slide="item"]')
const slideVoltar = document.querySelector('[data-slide="btn-voltar"]')
const slideProximo = document.querySelector('[data-slide="btn-proximo"]')
let slideAuto

let contador = 0

function proximo(event){
    limparIniciarInterval()
    const distanciaMovimentada = slideItem[0].getBoundingClientRect().width + 18
    slideLista.scrollLeft += distanciaMovimentada;
    console.log(distanciaMovimentada)
    contador++
    if(contador == 5){
        slideLista.scrollLeft = 0
        contador = 0
    }
}

function voltar(evento){
    limparIniciarInterval()
    const distanciaVoltar = slideItem[0].getBoundingClientRect().width + 20
    slideLista.scrollLeft -= distanciaVoltar;
    console.log(distanciaMovimentada)
    contador--
}

function telaCelular(){
    console.log("funcionou")
    if(window.outerWidth <= 800){
       slideAuto = setInterval(() =>{
            const distanciaMovimentada = slideItem[0].getBoundingClientRect().width + 18
            slideLista.scrollLeft += distanciaMovimentada;
            contador++
            if(contador == 5){
                slideLista.scrollLeft = 0
                contador = 0
            }
        }, 2500)
    }
   
}
function limparIniciarInterval(){
    clearInterval(slideAuto)
    slideAuto = setInterval(() =>{
        const distanciaMovimentada = slideItem[0].getBoundingClientRect().width + 18
        slideLista.scrollLeft += distanciaMovimentada;
        contador++
        if(contador == 5){
            slideLista.scrollLeft = 0
            contador = 0
        }
    }, 2500)
}


slideProximo.addEventListener("click", proximo)
slideVoltar.addEventListener("click", voltar)
window.addEventListener("load", telaCelular)


}




