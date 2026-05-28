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
// 2. FILTROS
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
// 3. ANIMACIÓN AL SCROLL
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
// 4. NAVBAR con scroll
// ─────────────────────────────────────────

function inicializarNavbar() {
  const navbar = document.querySelector("#navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ─────────────────────────────────────────
// 5. FORMULARIO
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
// ARRANQUE
// ─────────────────────────────────────────

renderizarProyectos(proyectos);
inicializarFiltros();
inicializarAnimacionScroll();
inicializarNavbar();
inicializarFormulario();
