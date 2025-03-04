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


// contenido desplegable
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los encabezados (h3) que activan el toggle
    let toggleButtons = document.querySelectorAll(".toggle-content");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation(); // Evita que el clic se propague al document

            let content = this.nextElementSibling.nextElementSibling; // Encuentra el div de contenido
            let chevronIcon = this.querySelector("i"); // Encuentra el ícono dentro del h3

            let isVisible = content.style.display === "block";

            // Oculta todos los demás antes de abrir el nuevo
            closeAllDropdowns();

            // Si estaba oculto, lo muestra
            if (!isVisible) {
                content.style.display = "block";
                chevronIcon.classList.add("rotated");
            }
        });
    });

    // Cierra el contenido al hacer clic fuera
    document.addEventListener("click", function(event) {
        if (!event.target.closest(".toggle-content") && !event.target.closest("#content")) {
            closeAllDropdowns();
        }
    });

    // Cierra todos los desplegables y resetea los iconos
    function closeAllDropdowns() {
        document.querySelectorAll("#content").forEach(content => {
            content.style.display = "none";
        });
        document.querySelectorAll(".toggle-content i").forEach(icon => {
            icon.classList.remove("rotated");
        });
    }
});
