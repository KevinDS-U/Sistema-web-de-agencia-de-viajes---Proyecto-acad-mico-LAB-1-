/*
  Archivo: data.js
  Descripción: Simula una BD su objetivo es guardar arreglos con la informacion de
  los Destinos, Usuarios y Reservas.
 */
//Arreglo Paquetes
const paquetes = [
    {
        id: 1,
        destino: "Boquete",
        provincia: "Chiriquí",
        precio: 160,
        dias: 3,
        descripcion: "Escápate a las montañas de Boquete y disfruta de un clima fresco, cafetales, senderos naturales y vistas espectaculares. Ideal para relajarse y conectar con la naturaleza.",
        transporte: ["Bus", "Auto"],
        imagen: "img/imgp1.jpg"
    },
    {
        id: 2,
        destino: "Bocas del Toro",
        provincia: "Bocas del Toro",
        precio: 375,
        dias: 4,
        descripcion: "Vive una experiencia caribeña única en Bocas del Toro con playas de arena blanca, aguas cristalinas, vida nocturna y actividades como snorkel y tours en lancha.",
        transporte: ["Avión", "Lancha"],
        imagen: "img/imgp2.jpg"
    },
    {
        id: 3,
        destino: "San Blas",
        provincia: "Guna Yala",
        precio: 180,
        dias: 3,
        descripcion: "Descubre el paraíso en San Blas con más de 300 islas vírgenes, aguas turquesas y la rica cultura Guna. Perfecto para desconectarse del mundo.",
        transporte: ["Auto", "Lancha"],
        imagen: "img/imgp3.jpg"
    },
    {
        id: 4,
        destino: "El Valle de Antón",
        provincia: "Coclé",
        precio: 120,
        dias: 2,
        descripcion: "Relájate en un entorno natural dentro de un cráter volcánico. Disfruta de senderos ecológicos, cascadas, aguas termales y un clima agradable todo el año.",
        transporte: ["Bus", "Auto"],
        imagen: "img/imgp4.jpg"
    },
    {
        id: 5,
        destino: "Santa Catalina",
        provincia: "Veraguas",
        precio: 170,
        dias: 3,
        descripcion: "Destino ideal para los amantes del surf y la aventura. Punto de acceso al Parque Nacional Coiba, con playas vírgenes y excelente biodiversidad marina.",
        transporte: ["Bus", "Auto"],
        imagen: "img/imgp5.jpg"
    },
    {
        id: 6,
        destino: "Isla Contadora",
        provincia: "Panamá",
        precio: 250,
        dias: 3,
        descripcion: "Disfruta de una experiencia exclusiva en Isla Contadora con playas de aguas cristalinas, arena blanca y un ambiente tranquilo en el archipiélago de Las Perlas.",
        transporte: ["Lancha", "Avión"],
        imagen: "img/imgp6.jpg"
    },
    {
        id: 7,
        destino: "Portobelo",
        provincia: "Colón",
        precio: 130,
        dias: 2,
        descripcion: "Sumérgete en la historia colonial de Portobelo, con sus fortificaciones, cultura afroantillana y festividades tradicionales, rodeado de hermosos paisajes costeros.",
        transporte: ["Bus", "Auto"],
        imagen: "img/imgp7.jpg"
    },
    {
        id: 8,
        destino: "Pedasí",
        provincia: "Los Santos",
        precio: 160,
        dias: 3,
        descripcion: "Relájate en las tranquilas playas de Pedasí y explora Isla Iguana, un refugio natural ideal para el avistamiento de fauna marina y actividades al aire libre.",
        transporte: ["Bus", "Auto"],
        imagen: "img/imgp8.jpg"
    }
];
//Verificación de los Paquetes
console.log(paquetes);
//Creamos Una Costante Para El Manejo del Login
const usuarios = [
    {
        id: 1,
        username: "AdGS134",
        password: "grupo72026",
        rol: "administrador"
    }
];