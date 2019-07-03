'use scrict'
let aDatos = ['perro', 'gato']
aDatos.length

//implementadas  como inmutables

console.log(aDatos.concat(['leon', 'tigre']))
console.log(aDatos)

//implementadas com mutables
aDatos.sort()
console.log(aDatos)

let aNumbers = [32, 3, 2, 21, 56, 5, 9]
let aNumbersOriginal = aNumbers.slice()
aNumbers.sort((a, b) => a-b )

console.log(aNumbers)
console.log(aNumbersOriginal.reverse())


//fraccionar arrays : inmutable
let nombres = ['ruben','eve', 'ana', 'marta', 'david', 'pepe']
let seleccion = nombres.slice(1,3)
console.log(seleccion)
console.log(nombres)
//fraccionar arrays : mutable
seleccion = nombres.splice(1,3)
console.log(seleccion)
console.log(nombres)

//splice para añadir

let paises = ['francia','italia','hungria','holanda']
paises.splice[2,0,'españa']
console.log(paises)

// Pilas y colas

      // Pila -> stack Filo

paises.push('portugal','alemania')
paises.pop()

      // Colas -> heap FIFO




