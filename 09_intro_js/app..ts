console.log('Hola amigos')

//Tipos primitivos

undefined // Tipo undefined
20 // tipo nombre
'Alejandro' // Tipo string
true // Tipo boolean

//Tipos referenciados

// {Nombre: 'pepe', edad: 27} Tipo objeto

// Tipado débil o fuerte
// Tipado estático o dinámico

//JS es de tipado débil y dinámico

let a

console.log(a)
console.log(typeof a)

a = 2
console.log(a)
console.log(typeof a)

a = 25
console.log(a)
console.log(typeof a)

a = 'pepe' //'pepe'
console.log(a)
console.log(typeof a)

a = false

console.log(a)
console.log(typeof a)



//en TypeScript el tipado puede ser fuerte y estático
let b: number 
b=3
/*b='pepe'*///error

//Uso normal de datos y variables

