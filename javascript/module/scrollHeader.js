export default function scrollHeader(){

}

const mulherLoira = document.querySelector('[data-img="mulherLoira"]')

const containerIntro = document.querySelector('[data-container="intro"]')
const textIntro = document.querySelectorAll('[data-text="intro"]')


function mostrar(){
    mulherLoira.classList.add("mostrar-img")

}

function mostrarScroll(){

    if(containerIntro.getBoundingClientRect().top <= 0){
        textIntro.forEach((item, index) =>{
            setTimeout(() =>{
                item.classList.add("mostrar-texto")
            }, 500 * index)
        })
    }
}

mostrar()
window.addEventListener('scroll', mostrarScroll)


const containerFormacao = document.querySelector('[data-container="formacao"]')
const cardFormacao = document.querySelectorAll('[data-formacao="item"]')
let alturaDisplay = window.innerHeight * 0.7

function mostrarScrollFormação(){
    console.log(alturaDisplay)
    console.log(containerFormacao.getBoundingClientRect().top)
    if(containerFormacao.getBoundingClientRect().top <= alturaDisplay){
        cardFormacao.forEach((item, index) =>{
            setTimeout(() =>{
                item.classList.add("mostrar-formacao")
            }, 500 * index)
        })
    }
}

window.addEventListener('scroll', mostrarScrollFormação)