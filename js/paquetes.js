/*Archivo: paquetes.js
  Descripción: Maneja la lógica relacionada con los paquetes turísticos,
  como selección y visualización.
*/

/* ============================================================
   MÓDULO: Página de Paquetes (paquetes.html)
   - Inyecta el CSS de paquetesE.css si no está cargado
   - Construye dinámicamente el título y la grilla de tarjetas
   - Renderiza cada paquete del array 'paquetes' (data.js)
   - Al pulsar "Reservar": guarda el ID y navega a detalle.html

   MÓDULO: Página de Detalle (detalle.html)
   - Lee el ID guardado en localStorage
   - Rellena los campos de detalle.html con el paquete correcto
   - Al enviar el formulario: guarda la reserva para admin.html
   ============================================================ */

(function() {
    // --------------------------------------------------------
    // Detectar en qué página estamos
    // --------------------------------------------------------
    var pagina = window.location.pathname.split('/').pop();

    /* ========================================================
       LÓGICA DE PAQUETES.HTML
       ======================================================== */
    if (pagina === 'paquetes.html') {

        /* ---- 1. Inyectar CSS de paquetesE.css ---- */
        if (!document.querySelector('link[href="css/paquetesE.css"]')) {
            var link = document.createElement('link');
            link.rel  = 'stylesheet';
            link.href = 'css/paquetesE.css';
            document.head.appendChild(link);
        }

        /* ---- 2. Estilos extra para provincia, badges, precio, días ---- */
        var styleExtra = document.createElement('style');
        styleExtra.textContent =
            '.titulo-pagina { text-align: center; padding: 22px 0 6px; font-size: 1.6rem; font-weight: 700; color: #1a1a2e; }' +
            '.card-body { padding: 12px 14px 14px; }' +
            '.card h2 { margin: 0 0 3px; font-size: 1.05rem; color: #111; }' +
            '.card .provincia { color: #888; font-size: 0.78rem !important; margin: 0 0 8px !important; }' +
            '.card .desc { color: #555; font-size: 0.81rem !important; margin: 0 0 10px !important; line-height: 1.45;' +
                ' display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }' +
            '.badges { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 12px; }' +
            '.badge { background: #ddeeff; color: #005bbd; border-radius: 4px; padding: 2px 9px;' +
                ' font-size: 0.73rem; font-weight: 600; }' +
            '.card-footer { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }' +
            '.precio { font-size: 1.25rem; font-weight: 700; color: #005bbd; }' +
            '.dias { font-size: 0.78rem; color: #aaa; }' +
            '.btn-reservar { display: block; width: 100%; padding: 10px 0; background: #007BFF;' +
                ' color: white; border: none; border-radius: 6px; cursor: pointer;' +
                ' font-size: 0.95rem; font-weight: 600; transition: background 0.2s; box-sizing: border-box; }' +
            '.btn-reservar:hover { background: #0056b3; }';
        document.head.appendChild(styleExtra);

        /* ---- 3. Crear el título de la página ---- */
        var h1 = document.createElement('h1');
        h1.className   = 'titulo-pagina';
        h1.textContent = 'Paquetes de Viaje';
        document.body.insertBefore(h1, document.body.firstChild);

        /* ---- 4. Crear el contenedor de tarjetas ---- */
        var contenedor = document.createElement('div');
        contenedor.id        = 'contenedor';
        contenedor.className = 'contenedor';
        h1.insertAdjacentElement('afterend', contenedor);

        /* ---- 5. Renderizar cada paquete ---- */
        paquetes.forEach(function(p) {

            // Chips de transporte
            var badgesHTML = p.transporte.map(function(t) {
                return '<span class="badge">' + t + '</span>';
            }).join('');

            var card = document.createElement('div');
            card.className = 'card';
            card.innerHTML =
                '<img src="' + p.imagen + '" alt="' + p.destino + '">' +
                '<div class="card-body">' +
                    '<h2>' + p.destino + '</h2>' +
                    '<p class="provincia">' + p.provincia + '</p>' +
                    '<p class="desc">' + p.descripcion + '</p>' +
                    '<div class="badges">' + badgesHTML + '</div>' +
                    '<div class="card-footer">' +
                        '<span class="precio">$' + p.precio + '</span>' +
                        '<span class="dias">' + p.dias + ' días</span>' +
                    '</div>' +
                    '<button class="btn-reservar" onclick="seleccionarPaquete(' + p.id + ')">Reservar</button>' +
                '</div>';

            contenedor.appendChild(card);
        });
    }

    /* ========================================================
       LÓGICA DE DETALLE.HTML
       Lee el paquete guardado en localStorage y rellena la página.
       Conecta el formulario de reserva con guardarReserva() de app.js.
       ======================================================== */
    if (pagina === 'detalle.html') {

        // Obtener el paquete seleccionado (función de app.js)
        var paquete = obtenerPaqueteSeleccionado();

        if (paquete) {
            // Rellenar los campos que ya existen en detalle.html
            var elImagen    = document.getElementById('imagen');
            var elDestino   = document.getElementById('destino');
            var elProvincia = document.getElementById('provincia');
            var elPrecio    = document.getElementById('precio');
            var elTransporte = document.getElementById('transporte');
            var elDescripcion = document.getElementById('descripcion');

            if (elImagen)     elImagen.src           = paquete.imagen;
            if (elDestino)    elDestino.textContent   = paquete.destino;
            if (elProvincia)  elProvincia.textContent = paquete.provincia;
            if (elPrecio)     elPrecio.textContent    = '$' + paquete.precio;
            if (elTransporte) elTransporte.textContent = paquete.dias + ' días · ' + paquete.transporte.join(', ');
            if (elDescripcion) elDescripcion.textContent = paquete.descripcion;

            // Actualizar el título <h1> de detalle.html con el nombre del destino
            var h1detalle = document.querySelector('h1');
            if (h1detalle) h1detalle.textContent = paquete.destino;
        }

        // Interceptar el formulario de reserva para guardar con guardarReserva()
        var form = document.querySelector('form.formulario');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                // Recoger datos del formulario
                var reserva = {
                    destino:   paquete ? paquete.destino : '(desconocido)',
                    nombre:    document.getElementById('nombre')   ? document.getElementById('nombre').value   : '',
                    email:     document.getElementById('email')    ? document.getElementById('email').value    : '',
                    telefono:  document.getElementById('telefono') ? document.getElementById('telefono').value : '',
                    fecha:     document.getElementById('fecha')    ? document.getElementById('fecha').value    : '',
                    personas:  document.getElementById('personas') ? document.getElementById('personas').value : '',
                    notas:     document.getElementById('notas')    ? document.getElementById('notas').value    : ''
                };

                // Guardar en localStorage (función de app.js) → visible en admin.html
                guardarReserva(reserva);

                alert('Reserva registrada correctamente. El equipo se pondrá en contacto contigo pronto.');

                // Cerrar modal y limpiar formulario
                var modal = document.getElementById('modalFormulario');
                if (modal) modal.style.display = 'none';
                form.reset();
            });
        }
    }

})();