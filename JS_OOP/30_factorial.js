function isValidNumber(n) {
      let r = true
      if ( isNaN(n) || typeof n == 'boolean' 
      || Array.isArray(n) || n === ''  || n === null) {
          r = false
      }
      return r
  }
  function isEntero (n) {
      return Math.trunc (Number(n)) === Number(n)
  }

function factorial(x) {

if (!isValidNumber(x)) {
      //let x = false
      throw new Error ('El parametro no es un numero')
}else if(!isEntero(x)){
      throw new Error ('El número no es entero')
}else if (x < 0){
      throw new Error ('Los numeros negativos no tienen factorial')
}else{let actual = 1
      for (i=2; i <= x; i++){
            actual = actual*i;
      }
      return actual;
}      
}
function mostrar(m) {
      
      return factorial(m)
  }
 console.log(mostrar (3.9))