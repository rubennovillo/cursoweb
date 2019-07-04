/**
 * @description: eliminar de un array los nombres que empiecen por una letra determinada
 * @param {string} letra
 * @param {array} aNombres
 * @returns {array} 
 */

 function limpiarArray(letra = '', aNombres = []){
       let r = []
       for (let i = 0; i < aNombres.length; i++) {
             const item = aNombres[i];
             if (item[0].toLowerCase() === letra.toLowerCase()){
                  aNombres.splice(i, 1)
                  i--
             }
             
       }
 }

 let aUsuarios = ['rosa', 'raquel', 'elena', 'renna','maria', 'emma']
 limpiarArray('r',aUsuarios)
 console.log(aUsuarios)