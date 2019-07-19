'use strict'

let x=2
let y=3
let z=x*y

y = '3'

z=x*y// Durante la operación Number (y)
console.log(z, typeof z)

/*sobrecarga del simbolo +
+3
'Hola' + 'Pepe'
2+2
*/
let w= x+y 
console.log(w)
x=23
y='20'
w= x+y // da '2320'

console.log(w, typeof w)
/*
*not !
*or ||
*AND &&
*/

function sumar (a,b){
    // if(typeof a !='number' ||typeof b !='number') {
    //     return 'No se puede sumar'
        //Array.isArray(a)
        //Typeof a =='boolean'
        //isNaN(a)

    //let r = a+b
    //let r= Number(a) + Number(b)
    //let r =parseFloat(a) + parseFloat(b)
    let r= +a+ +b
    return 'la suma es ' + r
}

console.log(sumar(2,2))
console.log(sumar(2,'5'))

