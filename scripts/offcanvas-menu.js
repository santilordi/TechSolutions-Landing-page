// Cierra el menú Offcanvas al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const offcanvas = document.querySelector('#offcanvasDarkNavbar');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas); // Cambia getinstance a getInstance
        if (bsOffcanvas) { // Verifica si existe la instancia
            bsOffcanvas.hide(); // Oculta el menú
        }
    });
});