'use strict'

//undefined
//boolean
//number (int, float)
//string
//object
// Declaración de la función
function sample() {

    // ES6

/*let saludo = '' // declarar una variable
saludo = hola // inicializar la variable*/
let saludo = 'Hola'// declarar + inicializar

console.log(saludo)

}
//let saludo = 'Hello'
function saludar(nombre = 'amigo') {
    let saludo = 'Hola '
    console.log(saludo + nombre)
}

//Invocación, ejecución uso de una función
saludar('Don Pepito')
saludar('Don José')
saludar()

//console.log(saludo)
/* Separación de responsabilidades o*/
/**
 * Función suma
 * 
 * @description Recibe dos parametros y devuelve la suma de ambos
 * 
 * @param {number}
 * @param {number}
 * @returns {number}
 * 
 */

function suma(a=0, b=0){
    let c = a + b
    return c

}

/**
 * Función mostrar
 * Recibe un texto y lo saca por panalla
 * 
 * @param(string)
 * @returns (vacio)
 * 
 */
function mostrar(cadena='') {
    console.log(cadena)
}

function division(a=0,b=1){ 
    return a/b
}

function resta(a=0,b=0){
    return a-b
}




function probar() {
    let x=2
    let y=2
mostrar(suma(x,y))
mostrar(suma(3,3))
mostrar(suma(54,96))
mostrar(suma(undefined, 2))
mostrar(division(12,4))
mostrar(division(undefined,2))
mostrar(resta(12,4))
saludar('Don Pepito')
saludar('Don José')
saludar()
}

probar()



