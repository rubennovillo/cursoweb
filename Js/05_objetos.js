//Si estamos en Java, C#, PHP ...
//los objetos dependen de clases
//class persona {}
//p1= new Persona{}
//p2= new Persona{}

//Los objetos son independientes de las clases
//en JS tenemos objetos literales:
//se basan en la notación JSON - (javaScript object notation)


let p1 = {
    nombre: 'Pepe',
    edad: 33,
    isAlumno: true,
    dirección: {
        calle: 'pez',
        Nº: 25,
        piso: 3,
        letra: 'B'
    },
    aficiones: ['pintar', 'música', 'Montañismo']


}
let p2 = {
    nombre: 'Rosa',
    edad: 35,
    isAlumno: true
}
//añadimos parametros al objeto
p1.altura = 179
p2.colorPelo = "rubio"

console.log(p1)
console.log(p2)

console.log(p1.nombre)
console.log(p1.dirección.piso)
console.log(p1.aficiones[0])
let propiedad = 'nombre'
console.log (p2[propiedad])

for (const key in p2) {
        const values = p2[key];
        console.log(`la propiedad ${key} vale ${values}`)
    }
    console.log("::::::::::::::::::::::::::::::::::::")

for (const key in p1) {
        const values = p1[key];
        console.log(`la propiedad ${key} vale ${values}`)
    }

