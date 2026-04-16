/*
  Archivo: app.js
  Descripción: Contiene funciones generales del sistema,
  como navegación y control global.
  Fase 5: Interactividad
*/


// ============================================================
// NAVEGACIÓN ENTRE PÁGINAS
// Uso: navegarA("detalle.html")
// ============================================================

/**
 * Navega a otra página del sitio.
 * @param {string} url - Ruta de la página destino (ej: "detalle.html")
 */
function navegarA(url) {
    window.location.href = url;
}

/**
 * Regresa a la página anterior del historial del navegador.
 */
function volverAtras() {
    window.history.back();
}


// ============================================================
// MANEJO DEL PAQUETE SELECCIONADO
// Puente de comunicación: paquetes.html → detalle.html
// Se usa localStorage como canal entre páginas.
// ============================================================

/**
 * Guarda el ID del paquete en localStorage y navega a detalle.html.
 * Se llama al hacer clic en "Reservar" desde paquetes.html.
 * @param {number|string} id - ID del paquete seleccionado
 */
function seleccionarPaquete(id) {
    localStorage.setItem('paqueteId', id);
    navegarA('detalle.html');
}

/**
 * Devuelve el objeto completo del paquete actualmente seleccionado.
 * Usado por detalle.html para mostrar la información del destino.
 * Requiere que data.js esté cargado (array 'paquetes' disponible).
 * @returns {Object|null} El paquete encontrado, o null si no hay selección.
 */
function obtenerPaqueteSeleccionado() {
    var id = localStorage.getItem('paqueteId');
    if (!id) return null;
    // 'paquetes' viene del array definido en data.js
    return paquetes.find(function(p) { return p.id == id; }) || null;
}


// ============================================================
// MANEJO DE RESERVAS
// Puente de comunicación: detalle.html → admin.html
// ============================================================

/**
 * Guarda una reserva nueva en localStorage.
 * Llamado desde detalle.html al enviar el formulario.
 * @param {Object} reserva - { nombre, email, telefono, fecha, personas, notas, destino }
 */
function guardarReserva(reserva) {
    var reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservas.push(reserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));
}

/**
 * Devuelve el array completo de reservas guardadas.
 * Usado por admin.html para listar todas las reservas.
 * @returns {Array} Lista de reservas
 */
function obtenerReservas() {
    return JSON.parse(localStorage.getItem('reservas')) || [];
}