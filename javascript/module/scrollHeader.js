export default function scrollHeader() {
  const mulherLoira = document.querySelector('[data-img="mulherLoira"]');
const containerIntro = document.querySelector('[data-container="intro"]');
const textIntro = document.querySelectorAll('[data-text="intro"]');
const drInfo = document.querySelectorAll('[data-infor="dr"]');
const containerDrInfo = document.querySelector('[data-container="dadosProfissional"]');
const containerFormacao = document.querySelector('[data-container="formacao"]');
const cardFormacao = document.querySelectorAll('[data-formacao="item"]');

let alturaDisplay = window.innerHeight * 0.7;

function mostrar() {
  mulherLoira.classList.add("mostrar-img");
}

function mostrarScroll() {
  if (containerIntro.getBoundingClientRect().top <= 0) {
    textIntro.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("mostrar-texto");
      }, 500 * index);
    });
  }
}

function mostrarDadosDr() {
  if (containerDrInfo.getBoundingClientRect().top <= alturaDisplay) {
    drInfo.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("mostrar-formacao");
      }, 500 * index);
    });
  }
}

function mostrarScrollFormacao() {
  if (containerFormacao.getBoundingClientRect().top <= alturaDisplay) {
    cardFormacao.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("mostrar-formacao");
      }, 500 * index);
    });
  }
}

function mostrarTextIntro() {
  mostrar();
  textIntro.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("mostrar-texto");
    }, 500 * index);
  });
}

function telaCelular() {
  if (window.outerWidth <= 800) {
    mostrar();
    window.addEventListener("scroll", mostrarScroll);
    window.addEventListener("scroll", mostrarScrollFormacao);
    window.addEventListener("scroll", mostrarDadosDr);
  } else {
    mostrarTextIntro();
  }
}

window.addEventListener("load", telaCelular);

}

