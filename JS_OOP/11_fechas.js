//Objetos

const d = new Date()
const e = new Error()
const r = new RegExp()
const r1 = / /

//Objetos no instanciables

Math.random()
Math.PI
// JSON.stringify()
// JSON.parse()


const fecha = new Date()
const america = new Date (1492, 6, 10)
const zz = new Date(253395333333333)
console.log(fecha)
console.log(fecha.valueOf())
console.log(america)
console.log(zz)
//get | getters
console.log(fecha.getTime())
console.log(fecha.getTimezoneOffset())
console.log(fecha.getDay())
console.log(fecha.getMonth())
//set | setters

//Ejercicio práctico
const aMeses = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre']
      
  const aDias = [
      'domingo',
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'sabado']
  
const capitalize = (cadena = '') => 
        cadena[0].toUpperCase() + cadena.slice(1)

/** function fechaEsp()
 * @description: devuelve la fecha como
 * “Día de la semana, día de Mes del Año” 
 * @author Alejandro Cerezo
 * @param { date | string } fecha 
 * si es string, debe respetar el estandar ISO
 * @external aDias, aMeses
 * @returns { string }
 */
const fechaEsp = (fecha = new Date() ) => {
    if (typeof fecha === 'string') {
        fecha = new Date(fecha)
    }
    const nombreDia = capitalize(aDias[fecha.getDay()])
    const dia = fecha.getDate()
    const mes = capitalize(aMeses[fecha.getMonth()])
    const año = fecha.getFullYear()
    return `${nombreDia}, ${dia} de ${mes} del ${año}`
}

const fechaEspShort = (fecha = new Date() ) => {
    fecha = (typeof fecha === 'string') ? new Date(fecha) : fecha
    return aDias[fecha.getDay()] + ', ' 
        + fecha.getDate() + ' de ' 
        + aMeses[fecha.getMonth()] + ' del ' 
        + fecha.getFullYear() }

let f = new Date(1965,7,31)
f = '1965-8-31'
console.log(fechaEsp(f))
console.log(fechaEspShort(f))