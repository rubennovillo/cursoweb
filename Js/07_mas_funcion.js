'use strict'

/**declaración de funciones
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sumaRaices(a = 0, b = 0) {
    let r = Math.sqrt(a) + Math.sqrt(b)
    return r
    
}

/*Asignacion de funciones*/
let x = {}
let user = {user: 'pepe', edad: 33}
let restaRaices = function(a = 0, b = 0) {
    return Math.sqrt(a) - Math.sqrt(b)
} 

console.log(sumaRaices(10,4))
console.log(restaRaices(10,4))

/* ES6: Asignación de funciones ARROW */ 

let productoRaices = (a = 0, b = 0) => Math.sqrt(a) * Math.sqrt(b)

let mediaRaiz = a => Math.sqrt(a)/2
     


console.log(productoRaices(10,4))
