
console.log(String.fromCharCode(33))
console.log('a'.charCodeAt())

/** Función enigma
 * @description Crea un programa con funciones de descripción y encriptación
 * @param {string} cadena
 * 
 * @returns {string}
 * 
 */

 function enigma ( cadena = '' ) {
      for (let i = 0; i <Array (cadena.length); i++) {
            const dato = cadena[i];
      dato = dato + 33
      return i      
      }

 }

 console.log (enigma('hola'))




