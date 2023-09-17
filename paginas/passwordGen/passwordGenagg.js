import {generarContrasena } from '../../module/aggregatorfile.js';

document.addEventListener('DOMContentLoaded', function () {
  const longitudInput = document.getElementById('longitud');
  const letrasCheckbox = document.getElementById('letras');
  const numerosCheckbox = document.getElementById('numeros');
  const simbolosCheckbox = document.getElementById('simbolos');
  const generarButton = document.getElementById('generar');
  const contrasenaGenerada = document.getElementById('contrasenaGenerada');

  generarButton.addEventListener('click', () => {
    const longitud = parseInt(longitudInput.value);
    const incluirLetras = letrasCheckbox.checked;
    const incluirNumeros = numerosCheckbox.checked;
    const incluirSimbolos = simbolosCheckbox.checked;

    const contrasena = generarContrasena(longitud, incluirLetras, incluirNumeros, incluirSimbolos);

    contrasenaGenerada.textContent = contrasena;
  });

  // Crear y asignar botones de preferencias
  const botonesPrefencias = document.getElementById('botonesPrefencias');

  const tiposCaracteres = [
    { id: 'letras', label: 'Letras' },
    { id: 'numeros', label: 'Números' },
    { id: 'simbolos', label: 'Símbolos' },
  ];

  tiposCaracteres.forEach((tipo) => {
    const boton = document.createElement('button');
    boton.textContent = tipo.label;
    boton.addEventListener('click', () => {
      document.getElementById(tipo.id).checked = !document.getElementById(tipo.id).checked;
    });
    botonesPrefencias.appendChild(boton);
  });
});