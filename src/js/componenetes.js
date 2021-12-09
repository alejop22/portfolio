import '../css/componentes.css'
import webpackLogo from '../assets/img/webpack-logo.png';

export const agregarNombre = ( nombre ) => {
    const h1 = document.createElement('h1');

    h1.innerText = `Mi nombre es ${nombre}!!!`;

    document.body.append(h1);

    //IMG
    console.log(webpackLogo);
    const img = document.createElement('img');
    img.src = webpackLogo;

    document.body.append(img);
}