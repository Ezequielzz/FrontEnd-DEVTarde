
// Ligando a Luz Vermelha
function pare() {
    document.querySelector('.vermelho').classList.remove('opacidade');
    document.querySelector('.amarelo').classList.add('opacidade');
    document.querySelector('.verde').classList.add('opacidade');
}

// Ligando a Luz Amarela
function atencao() {
    document.querySelector('.vermelho').classList.add('opacidade');
    document.querySelector('.amarelo').classList.remove('opacidade');
    document.querySelector('.verde').classList.add('opacidade');
}

// Ligando a Luz Verde
function siga() {
    document.querySelector('.vermelho').classList.add('opacidade');
    document.querySelector('.amarelo').classList.add('opacidade');
    document.querySelector('.verde').classList.remove('opacidade');
}



// Ativando seu Modo Automático
let modoAutomatico = false;

if (!modoAutomatico) {
    function auto() {

        document.querySelector('.vermelho').classList.remove('opacidade');
        document.querySelector('.amarelo').classList.add('opacidade');
        document.querySelector('.verde').classList.add('opacidade');
    
        // Gera um Loop
        autoModeInterval = setInterval(function () {
    
            // Espaço de Tempo para o ligamento das cores
            siga();
            setTimeout(function () {
                atencao();
            }, 5000);
            setTimeout(function () {
                pare();
            }, 7000);
        }, 13500);
    }
}


// Apagando todas as Luzes
function reset() {
    modoAutomatico = false
    document.querySelector('.vermelho').classList.add('opacidade');
    document.querySelector('.amarelo').classList.add('opacidade');
    document.querySelector('.verde').classList.add('opacidade');
}