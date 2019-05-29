'use strict'

let x = 34

if (x >= 0) {
    console.log('positivo')
} else {
    console.log('negativo')
}

let w

//falsy
w = false
w = undefined
w = null
w = 0
w = ''
//truely
w = true
w = 23
w = -456
w = ' '
w = 'pepe'
w = {}
w = []



if (w) {
    console.log('True')
} else {
    console.log('False')
}

let q = 0
q = 3

if (q) {
    console.log('q tiene valor')
} else {
    console.log('q es 0')
}

let nota = 0

if (!nota) {
    console.log('has sacado la nota mínima')
}

// let b = boolean(nota)
// b = !!nota

//let edad = 18
/*
function comprobarEdad(edad) {
    let i = 3
    let mensajes = [
        'Eres menos de edad',
        'Eres joven',
        'Debes tener cuidado',
        'Lo sento por ti'
    ]
    if (edad < 18) {
        i = 0
    } else if (edad < 35) {
        i = 1
    } else if (edad < 50) {
        i = 2
    } //else {
    //     i = 3
    // }
    console.log(`Con ${edad} años`, mensajes[i])
}

let e = 1000
comprobarEdad(e) */


function codificarEdad(edad) {
    let i = 3
    let mensajes = [
        'Eres menos de edad',
        'Eres joven',
        'Debes tener cuidado',
        'Lo sento por ti'
    ]
    if (edad < 18) {
        i = 0
    } else if (edad < 35) {
        i = 1
    } else if (edad < 50) {
        i = 2
    }
    return i
}

function responderSegunEdad (edad) {
    let mensajes = [
        'Eres menos de edad',
        'Eres joven',
        'Debes tener cuidado',
        'Lo sento por ti'
    ]
    console.log(`Con ${edad} años`, mensajes[codificarEdad(edad)])
}

let e = 20
responderSegunEdad(e)