/**
 * @description recorre un objeto a tantos niveles como contenga
 *              y crea un string con una información
 * @param {object} object
 * @returns{string}
 */

 function objectToString(obj = {}) {
     let cadena = ``
     for(const key in obj) {
         if(obj.hasOwnProperty(key)){
                const value = obj[key];
                if(typeof value == 'object'){
                cadena +=`
                ${key} : ${objectToString(value)}`
            }else{
                cadena +=
                 `
                 ${key}: ${value}
                 `
         }}
     }
     return cadena
 }
 let p2 = {
    nombre: 'Rosa',
    edad: 35,
    isAlumno: true
}

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
//let cadena = objectToString(p2)
let cadena = objectToString(p1)
console.log(cadena)