import { formatearFechaFlecha } from '../helpers/Funciones.js';

export class Libro {
  constructor(titulo, autor, isbn) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this.disponible = true;
    this.fechaRegistro = new Date();
  }

  // Método tradicional
  prestar() {
    if (this.disponible) {
      this.disponible = false;
      return true;
    }
    return false;
  }

  // Método flecha asignado a propiedad (no recomendado para métodos de instancia)
  devolver = () => {
    this.disponible = true;
    console.log(`Libro devuelto: ${this.titulo}`);
  };

  // Método que usa función helper flecha
  infoRegistro() {
    return `Registrado el: ${formatearFechaFlecha(this.fechaRegistro)}`;
  }

  // Getter tradicional
  get descripcion() {
    return `${this.titulo} - ${this.autor}`;
  }

  // Método estático con función flecha
  static crearLibroDemo = () => new Libro("Libro Demo", "Autor Demo", "000000");
}