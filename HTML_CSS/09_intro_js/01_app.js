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

a= {Nombre: 'pepe', edad: 27}

console.log(a)
console.log(typeof a)

a= [
    {Nombre: 'Ana', edad: 28},
    {Nombre: 'Juan', edad: 27},
    {Nombre: 'Elena', edad: 23}
]

console.log(a)
console.log(typeof a)




//en Java o c# el tipado es fuerte y estático
//a: int
//a = 3
//a

//Uso normal de datos y variables

let precio = 45.60
let producto= 'Gafas'
let precioPrevio = precio
precio=precio*1.06