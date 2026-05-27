// proyectos.js
// Array de objetos con los datos de todos los proyectos.
// JavaScript lo lee y construye las tarjetas automáticamente,
// Usé Claude para estructurar las propiedades del objeto
// y asegurarme de que los nombres de los archivos coincidieran

const proyectos = [
  {
    titulo: "Abril is Lost",
    categoria: "Producto",
    descripcion: "Juego de mesa para personas con dificultad al comunicarse.",
    imagen: //podré las imagenes aquí luego de organizar todo,
    slug: "proyecto-abrilislost",
  },
  {

     // slug: texto corto y sin espacios que se usa para crear URLs limpias y fáciles de leer.
  // Ejemplo: "Abril is Lost" → "abril-is-lost".
  // Esto fue sugerido por la IA para ayudarme a organizar las categorías de la manera más simple posible.

    titulo: "Madrid es Jazz",
    categoria: "Gráfico",
    descripcion: "Diseño de identidad de un evento para representar el género de jazz a través de la sinestesia musical",
    imagen: "img",
    slug: "proyecto-madridesjazz",
  },
  {
    titulo: "Ordo",
    categoria: "Interiores",
    descripcion: "Diseño para la renovación del torreón del Real Casino de Madrid",
    imagen: "img/proyectos/forma.jpg",
    slug: "proyecto-ordo",
  },
  {
    titulo: "Pond",
    categoria: "Gráfico",
    descripcion: "Diseño tipográfico basado en formas marítimas convertido a una marca de trajes de baño para niños",
    imagen: "img/proyectos/arco.jpg",
    slug: "proyecto-arco",
  },
  {
    titulo: "Un Mundo de Miel",
    categoria: "Experimentación",
    descripcion: "Estructure de colmena formada a base de biopástico de gelatina con infusión de miel.",
    imagen: "img",
    slug: "proyecto-unmundodemiel",
  },
  {
    titulo: "Isle of Dogs",
    categoria: "Producto",
    descripcion: "Proyecto de packaging inspirando en la película Isle of Dogs de Wes Anderson",
    imagen: "img",
    slug: "proyecto-isleofdogs",
  },
];
