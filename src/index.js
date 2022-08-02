import './styles.css';

window.addEventListener('load', () => {
    new Typed('#typed', {
        strings: [
            "Full Stack Developer",
            `<i class="fas fa-coffee"></i>     
            <i class="fas fa-laptop-code"></i>
            <i class="fas fa-bug"></i>    `],
        backSpeed: 100,
        smartBackspace: true,
        backDelay: 1500,
        startDelay: 100,
        typeSpeed: 80,
        loop: true,
    });

    new Glider(document.querySelector('.carousel__list'), {
        slidesToShow: 1,
        // slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__prev',
            next: '.carousel__next'
        },
        responsive: [
            {
              // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    slidesToShow: 1,
                    draggable: false,
                }
            },{
              // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    draggable: false,
                }
            }
        ]
    });

})



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
