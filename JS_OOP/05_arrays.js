/*let ob ={} // new Object()

let aDatos = [2, 8, 9, 76, 'pepe'] // new Array()*/

/*aDatos[aDatos.length] = 87
aDatos[aDatos.length] = 56
aDatos[10] = 9
console.log(aDatos[8])
for (let i = 0; i < aDatos.length; i++) {
      const item = aDatos[i];
      if(!item){
            aDatos[i] = parseInt(Math.random() * 100)
            
      }

}
console.log(aDatos)*/

/**Funcion randomArray
 * @description: funcion que devuelve un array de n números enteros aleatorios enteros y positivos menores o iguales a 100
 * @params {number } n
 * @returns {Array}
 */

 function randomArray(n = 0) {
       const r = []
            for (let i = 0; i < n; i++) {
            r[i] = parseInt(Math.random() * 100) 
            }
       return r    
 }
console.log(String(randomArray(65)))

/**Funcion formatoDNI
 * @description: dar formato número al DNI
 * @params {number | string } dni
 * @returns {number}
 */

 function formatoDNI (dni){
       if (typeof dni === 'number') {
             return dni
       }
       let r = 0
       let cadenaDNI= ''
       let aDNI = String(dni).split(' ')
       for (let i = 0; i < dni.length; i++) {
             const caracter = dni[i];
                  if(!isNaN(caracter)){
                        cadenaDNI += caracter
                  }
             
       }
       return Number(cadena)
 }

/**Funcion letraDNI
 * @description: Calcular letra DNI
 * @params {number | string } dni
 * @returns {string}
 */

 function letraDNI(dni) {
       const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
       let r= ''
       return aLetras [formatoDNI(dni)%23]
 }

 console.log (letraDNI('53473824'))
