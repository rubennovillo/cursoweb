const aDatos = ['Luis', 'Juan', 'Rosa', 'Maria']

console.log (aDatos._proto_)
console.log (Array.prototype)

Array.prototipe.saludar =function () {
      console.log ('Hola, soy un array')
}
aDatos.push('Ernesto')
