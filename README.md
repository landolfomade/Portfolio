# Portfolio — Natalia García Landolfo

Portfolio personal de diseño publicado en GitHub Pages.

**URL en vivo:** https://tuusuario.github.io/mi-portfolio/

---

## Descripción

Sitio web personal que recoge proyectos de diseño gráfico, diseño de producto
y diseño de interiores desarrollados durante el Grado en Diseño de la
Universidad Europea de Madrid.

El portfolio incluye seis proyectos con páginas de caso de estudio individuales,
galería filtrable por disciplina y animaciones al scroll.

---

## Proyectos incluidos

| Proyecto         | Disciplina           |
| ---------------- | -------------------- |
| Abril is Lost    | Diseño de Producto   |
| Madrid es Jazz   | Diseño Gráfico       |
| Ordo             | Diseño de Interiores |
| Pond             | Diseño Gráfico       |
| Un Mundo de Miel | Experimentación      |
| Isle of Dogs     | Packaging            |

---

## Tech stack

- HTML5 semántico
- CSS modular con custom properties (variables.css + componentes)
- JavaScript vanilla — sin librerías externas
- Galería dinámica generada desde array de objetos con `.filter()`
- Animaciones al scroll con `IntersectionObserver`
- Publicado con GitHub Pages

---

## Estructura de archivos

mi-portfolio/
├── index.html
├── proyecto-abrilislost.html
├── proyecto-madridesjazz.html
├── proyecto-ordo.html
├── proyecto-pond.html
├── proyecto-unmundodemiel.html
├── proyecto-isleofdogs.html
├── css/
│ ├── variables.css
│ ├── main.css
│ └── components/
│ ├── navbar.css
│ ├── hero.css
│ ├── cards.css
│ └── footer.css
├── js/
│ ├── proyectos.js
│ └── main.js
└── img/
└── proyectos/

---

## Uso de IA

Durante el desarrollo de este proyecto utilicé **Claude (Anthropic)** como
herramienta de apoyo en las siguientes partes:

- Estructuración del sistema de archivos CSS modular
- Depuración del `IntersectionObserver` y la lógica de validación del formulario
- Revisión de errores de estructura HTML
- Organización del array de proyectos en `proyectos.js`

El código fue revisado, adaptado y completado por mí. Todo el contenido
(textos, proyectos, decisiones de diseño) es propio.

---

## Captura de pantalla

![Captura del portfolio](img/Portfolio%20Página%20Principal.png)
