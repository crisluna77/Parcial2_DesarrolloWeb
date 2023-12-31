import {sumar, restar, multiplicar, dividir} from '../../module/aggregatorfile.js';

function realizarOperacion(operacion) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  
  const resultado = document.getElementById('resultado');
  
  switch (operacion) {
    case 'sumar':
      resultado.textContent = `Resultado de la Suma: ${sumar(num1, num2)}`;
      break;
    case 'restar':
      resultado.textContent = `Resultado de la Resta: ${restar(num1, num2)}`;
      break;
    case 'multiplicar':
      resultado.textContent = `Resultado de la Multiplicación: ${multiplicar(num1, num2)}`;
      break;
    case 'dividir':
      resultado.textContent = `Resultado de la División: ${dividir(num1, num2)}`;
      break;
    default:
      resultado.textContent = 'Operación no válida';
      break;
  }
}

  function addEventListenerById(id, event, fn) {
  document.getElementById(id).addEventListener(event, fn);
  }
// Asigna las funciones a los botones correspondientes
addEventListenerById('sumarButton', 'click', () => realizarOperacion('sumar'));
addEventListenerById('restarButton', 'click', () => realizarOperacion('restar'));
addEventListenerById('multiplicarButton', 'click', () => realizarOperacion('multiplicar'));
addEventListenerById('dividirButton', 'click', () => realizarOperacion('dividir'));




