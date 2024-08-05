export default function scrollHeader(){

}

const mulherLoira = document.querySelector('[data-img="mulherLoira"]')

const containerIntro = document.querySelector('[data-container="intro"]')
const textIntro = document.querySelectorAll('[data-text="intro"]')


function mostrar(){
    mulherLoira.classList.add("mostrar-img")

}

function mostrarScroll(){
    console.log(containerIntro.getBoundingClientRect().top)
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

