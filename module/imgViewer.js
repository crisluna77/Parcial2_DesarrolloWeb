// imageGallery.js


function cargarImagenes() {
  const inputImagenes = document.getElementById('inputImagenes');
  const galeria = document.getElementById('galeria');

  inputImagenes.addEventListener('change', (event) => {
    const archivos = event.target.files;
    for (const archivo of archivos) {
      if (archivo.type.startsWith('image/')) {
        const imagenContenedor = document.createElement('div'); // Contenedor para la imagen
        const imagen = document.createElement('img');
        const botonEliminar = document.createElement('button'); // Botón para eliminar la imagen
        botonEliminar.textContent = 'Eliminar';
        
        imagen.src = URL.createObjectURL(archivo);
        
        // Establece un tamaño fijo para las imágenes
        imagen.style.width = '200px'; // Cambia esto al tamaño deseado
        imagen.style.height = '150px'; // Cambia esto al tamaño deseado
        
        // Agrega un margen para separar las imágenes
        imagenContenedor.style.margin = '10px'; // Espacio considerable entre imágenes
        
        // Agrega un marco alrededor de la imagen
        imagenContenedor.style.border = '2px solid #000'; // Cambia el color y el grosor del marco según lo desees
        
        botonEliminar.addEventListener('click', () => {
          galeria.removeChild(imagenContenedor); // Elimina el contenedor de la imagen al hacer clic en el botón
        });
        
        imagenContenedor.appendChild(imagen);
        imagenContenedor.appendChild(botonEliminar); // Agrega el botón de eliminar a cada imagen
        galeria.appendChild(imagenContenedor);
      }
    }
  });
}

export { cargarImagenes };
