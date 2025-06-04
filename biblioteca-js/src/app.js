import { BibliotecaService } from './servicios/BibliotecaService.js';
import { mostrarInfoFlecha } from './helpers/Funciones.js';
import { Libro } from './entidades/Libro.js';


// Demostración función helper
console.log(mostrarInfoFlecha());

// Crear instancia del servicio
const biblioteca = new BibliotecaService();
console.log(biblioteca.infoSistema());

// Agregar datos usando diferentes métodos
biblioteca.agregarLibro("Cien años de soledad", "García Márquez", "123456");
biblioteca.agregarLibro("IT", "Stephen King","123457");
biblioteca.agregarLibro("1984", "George Orwell", "123458");
biblioteca.agregarLibro("Fahrenheit 451", "Ray Bradbury", "123459");
biblioteca.agregarLibro("El Principito", "Antoine de Saint-Exupéry", "123460");

biblioteca.registrarUsuario("Ana Torres", "001");
biblioteca.registrarUsuario("Susana Robles", "002");
biblioteca.registrarUsuario("Rosa Díaz", "003");
biblioteca.registrarUsuario("Juan Peréz", "004");
biblioteca.registrarUsuario("Rogelio Muñoz", "005");


// Uso de método estático con función flecha
const libroDemo = Libro.crearLibroDemo();
biblioteca.libros.push(libroDemo);

// Buscar libros (con callback tradicional)
biblioteca.buscarLibroPorTitulo("soledad", function(resultados) {
  console.log("\nResultados de búsqueda (tradicional):");
  resultados.forEach(libro => console.log(libro.descripcion));
});

// Buscar usuarios (con callback flecha)
biblioteca.buscarUsuarioPorNombre("ana", resultados => {
  console.log("\nUsuarios encontrados (flecha):");
  resultados.forEach(user => console.log(user.nombre));
});

// Interactuar con métodos de instancia
const usuario = biblioteca.usuarios[0];
const libro = biblioteca.libros[0];

// Usar método tradicional
usuario.tomarPrestado(libro);

// Usar método flecha
usuario.devolverLibro(libro);

// Mostrar historial
usuario.mostrarHistorial();

const susana = biblioteca.usuarios[1];
const rosa = biblioteca.usuarios[2]; 

const libro2 = biblioteca.libros[1];
const libro3 = biblioteca.libros[2];
const libro4 = biblioteca.libros[3];

// ================= PRÉSTAMOS =================
susana.tomarPrestado(libro);
susana.tomarPrestado(libro2);
rosa.tomarPrestado(libro3);
usuario.tomarPrestado(libro4);


// AGREGAR MULTAS A USUARIOS 
usuario.agregarMulta(50);    
rosa.agregarMulta(30);  

// Mostrar multas
console.log(`\nMulta de Ana: $${usuario.multa}`);
console.log(`Multa de Rosa: $${rosa.multa}`);

susana.mostrarHistorial();
rosa.mostrarHistorial();