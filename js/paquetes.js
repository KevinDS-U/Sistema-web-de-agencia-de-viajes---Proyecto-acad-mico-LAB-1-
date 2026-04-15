/*Archivo: paquetes.js
  Descripción: Maneja la lógica relacionada con los paquetes turísticos,
  como selección y visualización.
*/
const contenedor = document.getElementById("contenedor");
//Metodo Que Recorre el paquete
paquetes.forEach(p => {
    contenedor.innerHTML += `
    <div class="card">
      <img src="${p.imagen}" alt="${p.destino}">
      <h2>${p.destino}</h2>
      <p>${p.descripcion}</p>
      <p><strong>$${p.precio}</strong> - ${p.dias} días</p>
      <button onclick="verDetalle(${p.id})">Ver más</button>
    </div>
  `;
});
//Metodo que te lleva a detalles
function verDetalle(id) {
    localStorage.setItem("paqueteId", id);
    window.location.href = "detalle.html";
}