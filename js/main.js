// main.js

function renderizarProyectos(lista) {
  const contenedor = document.querySelector("#galeria");
  contenedor.innerHTML = "";

  lista.forEach(function (proyecto) {
    contenedor.insertAdjacentHTML(
      "beforeend",
      `
      <article class="card" data-categoria="${proyecto.categoria}">
        <a href="${proyecto.slug}.html">
          <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
          <div class="card-body">
            <span class="etiqueta">${proyecto.categoria}</span>
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
          </div>
        </a>
      </article>
    `,
    );
  });
}

// ─────────────────────────────────────────
// FILTROS
// ─────────────────────────────────────────

function inicializarFiltros() {
  document.querySelectorAll(".filtro").forEach(function (boton) {
    boton.addEventListener("click", function () {
      const categoriaElegida = this.dataset.filtro;

      let listaFiltrada;
      if (categoriaElegida === "todos") {
        listaFiltrada = proyectos;
      } else {
        listaFiltrada = proyectos.filter(function (proyecto) {
          return proyecto.categoria === categoriaElegida;
        });
      }

      renderizarProyectos(listaFiltrada);

      document.querySelectorAll(".filtro").forEach(function (b) {
        b.classList.remove("activo");
      });
      this.classList.add("activo");
    });
  });
}

// ─────────────────────────────────────────
// ANIMACIÓN AL SCROLL
// ─────────────────────────────────────────

function inicializarAnimacionScroll() {
  const observador = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(".animar-scroll").forEach(function (elemento) {
    observador.observe(elemento);
  });
}

// ─────────────────────────────────────────
// NAVBAR con scroll
// ─────────────────────────────────────────

function inicializarNavbar() {
  const navbar = document.querySelector("#navbar");
  const toggle = document.querySelector("#navbar-toggle");
  const links = document.querySelector("#navbar-links");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Menú móvil — abre y cierra al pulsar el botón
  toggle.addEventListener("click", function () {
    links.classList.toggle("abierto");
  });

  // Cierra el menú al pulsar un enlace
  links.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
      links.classList.remove("abierto");
    });
  });
}

// ─────────────────────────────────────────
// FORMULARIO
// ─────────────────────────────────────────

function inicializarFormulario() {
  const formulario = document.querySelector("#formulario-contacto");

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");

    // Limpiamos errores anteriores
    document.querySelector("#error-nombre").textContent = "";
    document.querySelector("#error-email").textContent = "";
    document.querySelector("#error-mensaje").textContent = "";
    nombre.classList.remove("error");
    email.classList.remove("error");
    mensaje.classList.remove("error");

    let valido = true;

    if (nombre.value.trim() === "") {
      document.querySelector("#error-nombre").textContent =
        "Escribe tu nombre.";
      nombre.classList.add("error");
      valido = false;
    }

    if (email.value.trim() === "") {
      document.querySelector("#error-email").textContent = "Escribe tu email.";
      email.classList.add("error");
      valido = false;
    }

    if (mensaje.value.trim() === "") {
      document.querySelector("#error-mensaje").textContent =
        "Escribe un mensaje.";
      mensaje.classList.add("error");
      valido = false;
    }

    if (valido) {
      document.querySelector("#form-exito").textContent = "¡Mensaje enviado!";
      formulario.reset();
    }
  });
}

// ─────────────────────────────────────────
// ANIMACIÓN DE ENTRADA AL CARGAR LA PÁGINA
// Hice esto para que los elementos del hero aparecen uno a uno
// con un pequeño retraso entre cada uno
// ─────────────────────────────────────────

function inicializarEntrada() {
  const elementos = document.querySelectorAll(".fade-entrada");

  elementos.forEach(function (elemento, indice) {
    setTimeout(
      function () {
        elemento.classList.add("visible");
      },
      200 + indice * 150,
    );
  });
}

// ─────────────────────────────────────────
// ARRANQUE
// ─────────────────────────────────────────
renderizarProyectos(proyectos);
inicializarFiltros();
inicializarAnimacionScroll();
inicializarNavbar();
inicializarFormulario();
inicializarEntrada();
