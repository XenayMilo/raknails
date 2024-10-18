// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el evento se propague al documento
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar el menú al hacer clic fuera
document.addEventListener('click', function(event) {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Cerrar el menú al redimensionar la ventana
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
