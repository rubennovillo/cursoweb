/***********************
 Crear un programa capaz de analizar una frase:

número de palabras (hecho)
longitud media de las palabras (hecho)
veces cada letra (hecho)
frecuencia cada letra
Incorporar un interface Web de entrada y salida
 ************************/

/**
 * @description Función que cuenta las palabras de una frase
 * @param {string} cadena 
 * @return {number}
 */

function contarPalabras(cadena = '') {

      let frase = cadena.split(' ')
      
      return frase.length

}
console.log(contarPalabras('Esta es la frase de prueba'))

/**
 * @description Función que hace la media de letras por palabra
 * @param {string} cadena 
 * @return {number}
 */


function mediaPalabras(cadena = '') {

      let frase = cadena.split(' ').join('').split('')

     return (frase.length)/contarPalabras(cadena)


            
}
console.log(mediaPalabras('Esta es la frase de prueba'))

/**
 * @description Función que cuenta las repeticiones de un caracter
 * @param {string} cadena 
 * @param {string} caracter
 * @return {number}
 */


function cuantasAparece(cadena = '', caracter){
      const indices = []
      for( i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === caracter) indices.push(i)
      }
          return indices.length;
    }
    
    console.log(cuantasAparece("Esta es la frase de prueba", "e"))


function frecuencia(cadena){
letras = []

}

 
