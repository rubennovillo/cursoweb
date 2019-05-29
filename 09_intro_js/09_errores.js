function codificarEdad(edad) {
    let i = 3
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
        'Eres meno de edad',
        'Eres joven',
        'Debes tener cuidado',
        'Lo sento por ti'
    ]
    let i =codificarEdad(edad)
    if (typeof i =='number' && (i)) 
    console.log(`Con ${edad} años`, mensajes[codificarEdad(edad)])
}

let e = 20
responderSegunEdad(e)