import './styles.css';

window.onload = function () {
    const typed = new Typed('#typed', {
        strings: [
            "Full Stack Developer",
            `<i class="fa-solid fa-heart"></i>        
            <i class="fas fa-laptop-code"></i>
            <i class="fa-solid fa-heart"></i>    `],
        backSpeed: 100,
        smartBackspace: true,
        backDelay: 1500,
        startDelay: 100,
        typeSpeed: 80,
        loop: true,
    });
};


const container = document.querySelector('.container_loading');
let identificadorTiempoDeEspera;


document.body.classList.add('withoutOverflow');
document.addEventListener('DOMContentLoaded', () => {

    identificadorTiempoDeEspera = setTimeout(ocultarCarga, 5800);
})

function ocultarCarga() {

    document.body.classList.remove('withoutOverflow');

    container.classList.add('oculto');
}
