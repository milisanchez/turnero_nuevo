const imagenes = ["./imagenes/plano1.png", "./imagenes/plano2.png"];
const informacion= [ 
    {
        nombre: "Planta baja",
        descripcion: "Contiene todas las áreas médicas. Está dividido en 6 áreas médicas junto con la recepción."
    },
    {
        nombre: "Planta alta",
        descripcion: "Contiene las áreas administrativas, las cuales son privadas y solo se le permite el acceso al personal autorizado. "
    },
];

let indiceComic = 0;

const imagenComic = document.getElementById("imagen-comic");
const informacionComic = document.getElementById("informacion");
const cambiarComicButton = document.getElementById("cambiar-comic");

function actualizarComic() {
    imagenComic.src = imagenes[indiceComic];
    informacionComic.innerHTML = `
        <h2>${informacion[indiceComic].nombre}</h2>
        <p>${informacion[indiceComic].descripcion}</p>
    `;
}

cambiarComicButton.addEventListener("click", () => {
    indiceComic = (indiceComic + 1) % imagenes.length;
    actualizarComic();
});

// Inicializar el carrusel con la primera imagen
actualizarComic();