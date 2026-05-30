// proyectos.js
// Array de objetos con los datos de todos los proyectos.
// JavaScript lo lee y construye las tarjetas automáticamente,
// Usé Claude para estructurar las propiedades del objeto
// y asegurarme de que los nombres de los archivos coincidieran

const proyectos = [
  {
    titulo: "Abril is Lost",
    categoria: "Producto",
    descripcion:
      "Juego de mesa para personas con dificultad al comunicarse verbalmente",
    imagen: "img/abrilislost1.jpg",
    slug: "proyecto-abrilislost",
  },
  {
    // slug: texto corto y sin espacios que se usa para crear URLs limpias y fáciles de leer.
    // Ejemplo: "Abril is Lost" a "abril-is-lost".
    // Esto fue sugerido por la IA para ayudarme a organizar las categorías de la manera más simple posible.

    titulo: "Madrid es Jazz",
    categoria: "Gráfico",
    descripcion:
      "Diseño de identidad de un evento para representar el género de jazz a través de la sinestesia musical",
    imagen: "img/madridesjazz1.jpg",
    slug: "proyecto-madridesjazz",
  },
  {
    titulo: "Ordo",
    categoria: "Interiores",
    descripcion:
      "Diseño para la renovación del torreón del Real Casino de Madrid",
    imagen: "img/ordo1.jpg",
    slug: "proyecto-ordo",
  },
  {
    titulo: "Pond",
    categoria: "Gráfico",
    descripcion:
      "Diseño tipográfico basado en formas marítimas convertido a una marca de trajes de baño para niños",
    imagen: "img/pond1.jpg",
    slug: "proyecto-pond",
  },
  {
    titulo: "El Principito",
    categoria: "Experimentación",
    descripcion:
      "Maquetación de la novela El Principito con tipografía personalizada sobre tela",
    imagen: "img/elprincipito1.jpg",
    slug: "proyecto-elprincipio",
  },
  {
    titulo: "Isle of Dogs",
    categoria: "Producto",
    descripcion:
      "Proyecto de packaging inspirando en la película Isle of Dogs de Wes Anderson",
    imagen: "img/isleofdogs1.jpg",
    slug: "proyecto-isleofdogs",
  },
];
