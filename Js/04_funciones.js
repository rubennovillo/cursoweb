function calcularSC(x,y) {
    console.log(arguments)
    return(x*x) + (y*y)
}

calcularSC(2,4) // 20

let a = 2
let b = 4
calcularSC(a, b) // 20

/**
 * 
 * @param  {array} rest 
 * @returns {number}
 */

function sumaDeCuadrados(...rest) {
    let r = 0
    let aCuadrados = []

    for (let i = 0; i < rest.length; i++) {
        const item = rest [i];
        let x = item * item
        aCuadrados.push(x)
        r += x

    } 
    return {sumaTotal: r, aCuadrados: aCuadrados}
}

// let aResultados = sumaDeCuadrados(4,6,8,4,3)
// let sumaTotal
// let aCuadrados
let {aCuadrados, sumaTotal} = sumaDeCuadrados(1,5,7,56)

console.log(sumaTotal)
console.log(aCuadrados)