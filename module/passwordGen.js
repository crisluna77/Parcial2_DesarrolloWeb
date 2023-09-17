
function generarContrasena(longitud, incluirLetras, incluirNumeros, incluirSimbolos) {
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let caracteres = '';
  
    if (incluirLetras) {
      caracteres += letras;
    }
  
    if (incluirNumeros) {
      caracteres += numeros;
    }
  
    if (incluirSimbolos) {
      caracteres += simbolos;
    }
  
    if (caracteres.length === 0) {
      return 'Debes incluir al menos un tipo de caracter.';
    }
  
    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      contrasena += caracteres[randomIndex];
    }
  
    return contrasena;
  }
  
  // Exporta la función para su uso en otros archivos
  export { generarContrasena };
  