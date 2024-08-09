export default function slide() {
    const slideGeral = document.querySelector('[data-slide="geral"]');
    const slideLista = document.querySelector('[data-slide="lista"]');
    const slideItem = document.querySelectorAll('[data-slide="item"]');
    const slideVoltar = document.querySelector('[data-slide="btn-voltar"]');
    const slideProximo = document.querySelector('[data-slide="btn-proximo"]');
  
    let slideAuto;
    let contador = 0;
    let maximoClick = 0;
  
    function proximo(event) {
      limparIniciarInterval();
      const distanciaMovimentada = slideItem[0].getBoundingClientRect().width + 18;
      slideLista.scrollLeft += distanciaMovimentada;
      contador++;
      if (contador === maximoClick) {
        slideLista.scrollLeft = 0;
        contador = 0;
      }
    }
  
    function voltar(evento) {
      limparIniciarInterval();
      const distanciaVoltar = slideItem[0].getBoundingClientRect().width + 20;
      slideLista.scrollLeft -= distanciaVoltar;
      contador--;
    }
  
    function telaCelular() {
      if (window.outerWidth <= 800) {
        slideAuto = setInterval(() => {
          const distanciaMovimentada = slideItem[0].getBoundingClientRect().width + 18;
          slideLista.scrollLeft += distanciaMovimentada;
          contador++;
          if (contador === maximoClick) {
            slideLista.scrollLeft = 0;
            contador = 0;
          }
        }, 2500);
      } else {
        slideAuto = setInterval(() => {
          const distanciaMovimentada = slideItem[0].getBoundingClientRect().width + 18;
          slideLista.scrollLeft += distanciaMovimentada;
          contador++;
          if (contador === maximoClick) {
            slideLista.scrollLeft = 0;
            contador = 0;
          }
        }, 2000);
      }
    }
  
    function limparIniciarInterval() {
      clearInterval(slideAuto);
      slideAuto = setInterval(() => {
        const distanciaMovimentada = slideItem[0].getBoundingClientRect().width + 18;
        slideLista.scrollLeft += distanciaMovimentada;
        contador++;
        if (contador === maximoClick) {
          slideLista.scrollLeft = 0;
          contador = 0;
        }
      }, 2500);
    }
  
    function numeroClick() {
      if (window.outerWidth <= 800) {
        maximoClick = 5;
      } else {
        maximoClick = 3;
      }
    }
  
    slideProximo.addEventListener("click", proximo);
    slideVoltar.addEventListener("click", voltar);
    window.addEventListener("load", numeroClick);
    window.addEventListener("load", telaCelular);
  }
  