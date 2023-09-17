import {cargarImagenes} from '../../module/aggregatorfile.js';

document.addEventListener('DOMContentLoaded', function () {
  cargarImagenes();

  // Crear y asignar botones
  const botones = document.getElementById('botones');
  
  const botonCargar = document.createElement('button');
  botonCargar.textContent = 'Cargar Imágenes';
  botonCargar.addEventListener('click', () => {
    const inputImagenes = document.getElementById('inputImagenes');
    inputImagenes.click(); // Simula hacer clic en el input de carga de imágenes
  });
  
  botones.appendChild(botonCargar);
});
