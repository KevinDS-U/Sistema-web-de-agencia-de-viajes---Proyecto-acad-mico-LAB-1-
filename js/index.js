/**
 * Archivo: js/index.js
 * Descripción: Lógica e interactividad de la página principal (index.html)
 * Autor: Melany G. (Frontend 3)
 */

/* ══════════════════════════════════════════
   1. NAVBAR — Cambio de estilo al hacer scroll
══════════════════════════════════════════ */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Activa el link del navbar según la página actual
const links = document.querySelectorAll('.nav-links a');
const paginaActual = window.location.pathname.split('/').pop();

links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === paginaActual) {
        link.classList.add('active');
    }
});

/* ══════════════════════════════════════════
   2. HERO TAGS — Filtro visual (Destacados / Nuevos / Más Vendidos)
══════════════════════════════════════════ */
const heroTags = document.querySelectorAll(".hero-tag");

heroTags.forEach(function (tag) {
    tag.addEventListener("click", function () {
        // Quitar clase activa de todos
        heroTags.forEach(function (t) {
            t.classList.remove("active");
        });
        // Activar el clickeado
        tag.classList.add("active");

        // Filtrar destinos según el tag seleccionado
        filtrarDestinos(tag.textContent.trim());
    });
});

/* ══════════════════════════════════════════
   3. FILTRO DE DESTINOS según tag del hero
══════════════════════════════════════════ */
function filtrarDestinos(filtro) {
    const cards = document.querySelectorAll(".destino-card");

    cards.forEach(function (card) {
        const badge = card.querySelector(".destino-badge");
        if (!badge) return;

        const tipo = badge.textContent.trim().toLowerCase();

        if (filtro === "Destacados") {
            card.style.display = "block";
        } else if (filtro === "Nuevos" && tipo === "nuevo") {
            card.style.display = "block";
        } else if (filtro === "Más Vendidos" && tipo === "más vendido") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

/* ══════════════════════════════════════════
   4. ANIMACIÓN DE ENTRADA al hacer scroll
══════════════════════════════════════════ */
const elementosAnimados = document.querySelectorAll(
    ".destino-card, .paquete-card, .blog-card, .testi-card"
);

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

// Inyectar estilo para la clase .visible
const style = document.createElement("style");
style.textContent = ".visible { opacity: 1 !important; transform: translateY(0) !important; }";
document.head.appendChild(style);

// Preparar cada elemento con estado inicial oculto
elementosAnimados.forEach(function (el, index) {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition =
        "opacity 0.5s ease " + index * 0.08 + "s, " +
        "transform 0.5s ease " + index * 0.08 + "s";
    observer.observe(el);
});

/* ══════════════════════════════════════════
   5. SMOOTH SCROLL — Links internos del navbar
══════════════════════════════════════════ */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");

        if (href && href.startsWith("#")) {
            e.preventDefault();
            const destino = document.querySelector(href);
            if (destino) {
                destino.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});