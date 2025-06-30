// script.js

// Espera a que el DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // 1. Validación del Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        // Prevenir el envío por defecto del formulario
        event.preventDefault();
        event.stopPropagation();

        // Aplicar estilos de validación de Bootstrap
        if (!contactForm.checkValidity()) {
            contactForm.classList.add('was-validated');
        } else {
            // Si el formulario es válido, procedemos
            contactForm.classList.remove('was-validated');

            // Recoger los datos del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simular la apertura del cliente de correo
            // 1. Mostrar la ventana modal de confirmación
            const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
            confirmationModal.show();
            
            // 2. Crear el enlace mailto: para abrir el cliente de correo del usuario
            // Se codifican los componentes para que los espacios y caracteres especiales funcionen
            const subject = encodeURIComponent(`Mensaje de ${name} desde la web VetCare`);
            const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);
            const mailtoLink = `mailto:contacto@vetcare.com?subject=${subject}&body=${body}`;

            // 3. Redirigir al cliente de correo después de un breve momento
            // Esto le da tiempo al usuario a ver el modal antes de que el navegador cambie de foco
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 1500); // 1.5 segundos de espera
            
            // Limpiar el formulario después del envío
            contactForm.reset();
        }
    });

    // 2. Smooth Scroll para los enlaces del menú (Bootstrap 5 lo maneja con data-attributes, pero esto es un fallback o refuerzo)
    // El atributo 'data-bs-spy="scroll"' en el body y los 'href="#section"' en los links del navbar ya lo hacen.
    // No se necesita JS adicional para esta funcionalidad con Bootstrap 5.3.

    // 3. Animación del Navbar al hacer scroll (opcional, para un efecto extra)
    const navbar = document.getElementById('main-nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                // Puedes agregar una clase para cambiar el estilo si lo deseas, ej: encoger el navbar
                // navbar.classList.add('navbar-scrolled');
            } else {
                // navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Inicializar el carrusel de testimonios con un intervalo personalizado
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if(testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000, // Cambia de slide cada 5 segundos
            wrap: true // Vuelve al principio cuando llega al final
        });
    }

});