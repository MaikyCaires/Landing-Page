export default function menuMobile () {
    
}

const btn = document.querySelector('[data-mobile="button"]')
const menu = document.querySelector('[data-links="menu"]')
const container = document.querySelector('body')

function mostrar(){
    menu.classList.toggle("mostrarMenu")
    if(menu.classList.contains("mostrarMenu")){
        container.addEventListener("click", fecharMenu)
    }else{
        container.removeEventListener("click", fecharMenu)
    }
}

function fecharMenu(event){
    if(event.target != btn){
        menu.classList.remove("mostrarMenu")
    }
}


btn.addEventListener("click", mostrar)


