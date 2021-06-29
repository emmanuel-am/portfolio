

// smooth scroll con JS
document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
    enlace.addEventListener('click', function (e) { //cuando alguien da click 
        e.preventDefault(); //previene la accion por default de abrir el link cuando das click

        document.querySelector(this.getAttribute('href')).scrollIntoView({ //con getAttribute conseguimos el valor del elemento que le damos click y con queryselector seleccionas el elemento que le estas dando click, .scrollIntoView da el efecto cuando das el scroll cuando das click
            behavior: 'smooth',
            block: 'start' //con block: 'start' es para que se quede en la parte superior cuando das click y da scroll
        });
    });
});

//Cambia de color el fondo de hacer scroll y deja la navegacion cuando das scroll
window.onscroll = (e) => {
    let scroll = window.scrollY;

    const headerScroll = document.querySelector('#navegacion-principal');
    if(scroll > 300) {
        headerScroll.classList.add('bg-success');
    } else {
        headerScroll.classList.remove('bg-success');
    }
};
