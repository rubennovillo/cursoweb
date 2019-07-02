{/*Stack overflow*/
/**función listaReyes
 * @description Comprobar si el nombre esta en el array
 * @param {String} name
 * @returns {boolean}
 */

 function isRey(nombre) {
       const reyes =['Fernando', 'Isabel', 'Juana','Carlos','Felipe','Luis','Jose','Amadeo','Alfonso','Juan Carlos']

       for (let i = 0; i < isRey.length; i++) {
             const item = reyes[i];
             if (nombre.toUpperCase() == item.toUpperCase()) {
                   return [true,1]
             }
       }
       return false
 }

 function mostrarIsRey(nombre) {

      // let[isARey, position] = isRey(nombre)

      let mensaje = [
      `El nombre ${nombre.toUpperCase()} no ha sido usado por ningun rey en España`,
      `El nombre ${nombre.toUpperCase()} ha sido usado por algun rey en España 
      y es el número ${++position} de la lista`,
      ] 
      console.log(mensaje[+isRey])
 }

//  mostrarIsRey('Maria José')
 
//  mostrarIsRey('Jose Luis')
console.log(reyes.indexOf('Fernando'))
console.log(reyes.indexOf('Juana'))
console.log(reyes.indexOf('Gustavo'))
}