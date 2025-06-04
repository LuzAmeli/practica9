import { Libro } from '../entidades/Libro.js';
import { Usuario } from '../entidades/Usuario.js';
import { formatearFechaTradicional } from '../helpers/Funciones.js';

export class BibliotecaService {
  constructor() {
    this.libros = [];
    this.usuarios = [];
    this.inicioSistema = new Date();
  }

  // Función tradicional
  agregarLibro(titulo, autor, isbn) {
    const libro = new Libro(titulo, autor, isbn);
    this.libros.push(libro);
    return libro;
  }

  // Función flecha asignada a propiedad
  registrarUsuario = (nombre, id) => {
    const usuario = new Usuario(nombre, id);
    this.usuarios.push(usuario);
    return usuario;
  };

  // Método que usa función tradicional externa
  infoSistema() {
    return `Sistema iniciado el: ${formatearFechaTradicional(this.inicioSistema)}`;
  }

  // Método con callback tradicional
  buscarLibroPorTitulo(titulo, callback) {
    const resultado = this.libros.filter(function(libro) {
      return libro.titulo.toLowerCase().includes(titulo.toLowerCase());
    });
    callback(resultado);
  }

  // Método con callback flecha
  buscarUsuarioPorNombre(nombre, callback) {
    const resultado = this.usuarios.filter(user => 
      user.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    callback(resultado);
  }
}