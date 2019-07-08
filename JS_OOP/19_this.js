/* 4 formas de ejecutar una función
- patrones de invocación
- cambian el significado de this
*/

function algo () {
      console.log(this)
}

//Funcion

algo() // this es process (Node) o window (Browser)

// Metodo

const o = { nombre:'Pepe', edad: 23}
o.algo = algo

o.algo()

// Constructora

const nuevo = new algo()

//indirectamente (apply o call)

const otro = {
      tipo: 'perro',
      nombre:'Rufo'
}

console.log('_____________________________________________')