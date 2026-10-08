// ================================
// VIRAR AS FOTOS
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        card.classList.toggle("virado");

    });

});


// ================================
// CARROSSEL COM ARRASTAR
// ================================

const carousel = document.querySelector(".carousel");

let isDragging = false;
let startX = 0;
let scrollLeft = 0;

carousel.addEventListener("mousedown", function(e) {

    isDragging = true;

    startX = e.pageX - carousel.offsetLeft;

    scrollLeft = carousel.scrollLeft;

});

carousel.addEventListener("mouseup", function() {

    isDragging = false;

});

carousel.addEventListener("mouseleave", function() {

    isDragging = false;

});

carousel.addEventListener("mousemove", function(e) {

    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - carousel.offsetLeft;

    const movimento = (x - startX) * 2;

    carousel.scrollLeft = scrollLeft - movimento;

});


// ================================
// CONTADOR DO NAMORO
// ================================

// DIA EM QUE VOCÊS COMEÇARAM
const inicioNamoro = new Date(2026, 4, 8, 0, 0, 0);


// Função responsável pelo contador
function atualizarContador() {

    const agora = new Date();

    const diferenca = agora.getTime() - inicioNamoro.getTime();


    // Se a diferença for negativa, evita números estranhos
    if (diferenca < 0) {
        return;
    }


    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotais / 86400);

    const horas = Math.floor(
        (segundosTotais % 86400) / 3600
    );

    const minutos = Math.floor(
        (segundosTotais % 3600) / 60
    );

    const segundos = segundosTotais % 60;


    // Coloca os valores no HTML

    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


// Executa assim que o site abre
atualizarContador();


// Atualiza a cada segundo
setInterval(atualizarContador, 1000);