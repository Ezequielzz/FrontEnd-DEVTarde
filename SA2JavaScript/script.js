let autoModeInterval;

// Ligando a Luz Vermelha
function pare() {
    clearInterval(autoModeInterval);
  document.querySelector(".vermelho").classList.remove("desligado");
  document.querySelector(".amarelo").classList.add("desligado");
  document.querySelector(".verde").classList.add("desligado");
}

// Ligando a Luz Amarela
function atencao() {
    clearInterval(autoModeInterval);
  document.querySelector(".vermelho").classList.add("desligado");
  document.querySelector(".amarelo").classList.remove("desligado");
  document.querySelector(".verde").classList.add("desligado");
}

// Ligando a Luz Verde
function siga() {
    clearInterval(autoModeInterval);
  document.querySelector(".vermelho").classList.add("desligado");
  document.querySelector(".amarelo").classList.add("desligado");
  document.querySelector(".verde").classList.remove("desligado");
}

// Ativando o Modo Automático
function auto() {
  document.querySelector(".vermelho").classList.remove("desligado");
  document.querySelector(".amarelo").classList.add("desligado");
  document.querySelector(".verde").classList.add("desligado");

  // Gera um Loop
  autoModeInterval = setInterval(function () {
    // Espaço de Tempo para o ligamento das cores
    siga();
    setTimeout(function () {
      atencao();
    }, 5000);
    setTimeout(function () {
      pare();
    }, 7500);
  }, 13500);
}

// Apagando todas as Luzes
function reset() {
  clearInterval(autoModeInterval);
  document.querySelector(".vermelho").classList.add("desligado");
  document.querySelector(".amarelo").classList.add("desligado");
  document.querySelector(".verde").classList.add("desligado");
}
