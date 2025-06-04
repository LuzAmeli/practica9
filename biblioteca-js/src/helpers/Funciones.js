// Función tradicional
export function formatearFechaTradicional(fecha) {
  return new Date(fecha).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Función flecha equivalente
export const formatearFechaFlecha = fecha => 
  new Date(fecha).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

// Función tradicional con this
export function mostrarInfoTradicional() {
  return `Ejecutado el: ${new Date().toLocaleString()}`;
}

// Función flecha que llama a tradicional (demostración)
export const mostrarInfoFlecha = () => mostrarInfoTradicional();