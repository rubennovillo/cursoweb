const aDatos = [2, 3, 7, 4, 9, 5]
/*aDatos.map((item, i, array) => {})
aDatos.filter((item, i, array) => {})
aDatos.some((item, i, array) => {})
aDatos.every((item, i, array) => {})
aDatos.forEach((item, i, array) => {})
aDatos.reduce((item, i, array) => {})
aDatos.reduceRight((item, i, array) => {})*/

aDatos.forEach(
      item => {console.log( ` ${item}ºC`)}

)

// Proyectar o mapear u array

function cuadrados(aDatos = []) {
     return aDatos.map(item => item * item)
      
}

console.log(cuadrados(aDatos))

// Filtro de arrays

function pares(aDatos = []) {
      aDatos.filter( item => !(item%2))

}
console.log(pares(aDatos))