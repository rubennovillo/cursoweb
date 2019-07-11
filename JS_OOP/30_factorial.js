function isValidNumber(n) {
      let r = true
      if ( isNaN(n) || typeof n == 'boolean' 
      || Array.isArray(n) || n === ''  || n === null) {
          r = false
      }
      return r
  }


function factorial(x) {

if (!isValidNumber(x)) {
      let x = false
return 'No se de puede calcular su factorial'
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
 console.log(mostrar ([]))