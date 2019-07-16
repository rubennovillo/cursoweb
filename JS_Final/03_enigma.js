
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
      for (let i = 0; i <Array(cadena.length); i++) {
            const letra = cadena[i];
      letra = letra + 33
      return i      
      }

 }
 function encriptar (letra){
      

 }

 console.log (enigma('hola'))




