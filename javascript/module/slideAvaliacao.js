export default function slideAvaliacao(){

}
let contador = 0
let refInterval

const containerScroll = document.querySelector('[data-container="avaliacao"]')
console.log(containerScroll)

function moverScroll(){
    if(window.outerWidth > 900){
         refInterval = setInterval(() =>{
        containerScroll.scrollLeft += 1300
        contador++
        if(contador == 2){
            contador = 0
            containerScroll.scrollLeft = 0
        }
    }, 4000)
    }else{
        refInterval = setInterval(() =>{
            containerScroll.scrollLeft += 363
            contador++
            if(contador == 4){
                contador = 0
                containerScroll.scrollLeft = 0
            }
        }, 5000)
    }
   
}

window.addEventListener("load", moverScroll)