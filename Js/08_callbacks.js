'use scrict'
function calcular(a, b, operacion, callback) {
    let msg = `El resultado de la ${operacion} de ${a} y ${b} es `
    return msg + callback (a, b)
}

function producto (a, b) {return a*b}

console.log(calcular (4,6, 'suma' , function (x,y) {return x + y}))
console.log(calcular (4,6, 'resta' , function (x,y) {return x - y}))
console.log(calcular (4,6, 'producto' , producto))
