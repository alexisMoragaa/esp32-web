import './styles.css';

/**
 * Inicializa las animaciones de entrada respetando las preferencias de movimiento del visitante.
 * @returns {void}
 */
function inicializarAnimaciones() {
  const elementos = document.querySelectorAll('.reveal');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elementos.forEach((elemento) => elemento.classList.add('is-visible'));
    return;
  }

  const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('is-visible');
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.14 });

  elementos.forEach((elemento) => observador.observe(elemento));
}

inicializarAnimaciones();
