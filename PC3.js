// Navegación entre las secciones/preguntas desde el menú
function navigateTo(sectionId) {
  // Actualizar la clase activa en los botones del menú
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Activar el botón presionado
  event.currentTarget.classList.add('active');

  // Desplazamiento suave hacia la sección elegida
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Acción interactiva para la botonera de la Pregunta 1
function p1Accion(mensaje) {
  const feedbackBox = document.getElementById('p1-feedback');
  feedbackBox.style.opacity = '0';

  setTimeout(() => {
    feedbackBox.textContent = mensaje;
    feedbackBox.style.opacity = '1';
  }, 150);
}