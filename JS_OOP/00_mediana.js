/**
 * @description: función que calcula la media de n números independientes
 * @param {[]number} aDatos
 * @returns {number}
 * 
 */

function Mediana(...aDatos) {
   m = 0
    
    
    for (let i = 0; i < (aDatos.length +1)/2; i++) {
        const item = aDatos[i];
        aDatos.sort()
        m = item
       
      
       
   }
   return m
}

console.log(Mediana(2, 8, 7, 0, 9, 1, 4))