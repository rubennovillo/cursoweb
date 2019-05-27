'use strict'

//valores primitivos
//()
let a = 2
let b = a

b=b*b
a=a/2

console.log('valor de b',b)
console.log('valor de a', a)

let p1={nombre: 'Pepe', edad: 34}
let p2=p1
p1.nombre = 'Juan'
console.log(p1)
console.log(p2)

let a1 = { nombre: 'Raquel', edad: 25}
function inscribirEnJs(alumno) {
    if (alumno) {
        alumno.curso = JS
        
    }

}
let saldo = 1000

function invertir(x) {
    x=x*2
    return x
}

saldo = invertir(saldo) // paso por valor
console.log(saldo)