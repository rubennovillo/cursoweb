function Direccion(calle, numero, ciudad, pais) {
      this.calle = calle
      this.numero = numero
      this.ciudad = ciudad
      this.pais = pais
}

function Persona(nombre, edad, direccion) {
      this.nombre = nombre
      this.edad = edad
      this.direccion = direccion //Asociación (atributos)
      this.mascota = []      
}
function Mascota(nombre, especie){
      this.nombre = nombre
      this.especie = especie
}
function Alumno (nombre, edad, direccion, curso) {
      this.curso = curso
      Persona.prototype.constructor.call(this, nombre, edad, direccion)
}
Alumno.prototype = new Persona()
Alumno.prototype.constructor = Alumno

const a1 = new Alumno (
      console.log (a1)
)

Persona.prototype.comprarMascota = function(mascota) {
      this.mascota.push(mascota)
}     //Dependencia (metodo)

const p1 = new Persona(
      'Pepe',
      43,
      new Direccion ('c/Cuenca', 35, 'Palencia', 'España')
)

const p2 = new Persona(
      'Luisa',
      19,
      new Direccion ('Avenida del Cirio', 114, 'Vigo', 'España')
)

const m1 = new Mascota('lola', 'mona')
const m2 = new Mascota('kiko', 'loro')

p1.comprarMascota(m2) // Inyeccion de dependencia
p2.comprarMascota(m1)

console.log(p1)
console.log(p2)