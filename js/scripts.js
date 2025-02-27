/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Asegúrate de que el documento esté listo antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el encabezado y el contenido
    const header = document.getElementById('toggle-header');
    const content = document.getElementById('toggle-content');

    // Inicialmente, ocultamos el contenido
    content.style.display = 'none';

    // Agregar el evento de clic al encabezado
    header.addEventListener('click', function() {
        // Verificar si el contenido está visible o no
        if (content.style.display === 'none') {
            // Mostrar el contenido
            content.style.display = 'block';
        } else {
            // Ocultar el contenido
            content.style.display = 'none';
        }
    });
});
