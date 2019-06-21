// let aDatos = [1,2,3,4,5,6,7,8,9]
//     n%3 == 0
//  const element = array[i];
//Ejemplo de iteración y condición
let acumulador = 0
let max = 200
let contador = 0

for (let i = 0; i < 10; i++) {
    contador = i
    console.log(i)
    if ( acumulador + (i*i) > max){
        break
    }
    acumulador +=  (i*i)
}
console.log(acumulador, contador)

/** JSDoc
 * @description
 * @param
 * @returns
 */

/**
 * Saber si un número es multiplo de tres,
 * Seleccionar en un array los que lo sean y guardarlos en otro array y
 * mostrarlo por pantalla
 * 
 */

 /** funcion isMultiplo
 * @description devuelve true si un número m es múltiplo de n
 * @param {number}: m
 * @param {number}: n
 * @returns {boolean}
 */

function isMultiplo(m = 0, n = 0) {
     let r = true
     if (n%m) { // n%m != 0
         r = false
     }
     return r   
 }

//Espectativas
 console.log('isMultiplo (2,20) debe dar true')
//prueba
 console.log(isMultiplo(2,20))
//Espectativas
 console.log('isMultiplo (2,21) debe dar false')
//prueba
 console.log(isMultiplo(2,21))
 //Espectativas
 console.log('isMultiplo (3,20) debe dar false')
//prueba
 console.log(isMultiplo(3,20))
//Espectativas
 console.log('isMultiplo (3,21) debe dar true')
//prueba
 console.log(isMultiplo(3,21))
 //Espectativas
 console.log('isMultiplo (2,-20) debe dar true')
//prueba
 console.log(isMultiplo(2,-20))
//Espectativas
 console.log('isMultiplo (2,-21) debe dar false')
//prueba
 console.log(isMultiplo(2,-21))

/** función extraerMultiplos
 * @description estraer de un array los multiplos de n
 * @param {number}: n
 * @param {array}:aDatos
 * @returns: {array}
 */

 function extraerMultiplos(n, aDatos) {
     let r = []
     return r
 }
   
