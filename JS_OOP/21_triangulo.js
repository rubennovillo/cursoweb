// Función constructora de objetos triángulos

/**Funcion triangulos
 * @property {number} lado1
 * @property {number} lado2
 * @property {number} lado3
 * @method getLados
 * @method getPerimetro
 * @method getTipo
 */

/*function triangulo(lado1=1,lado2=1,lado3=1) {
      this.l1 = l1
      this.l2 = l2
      this.l3 = l3
      if (lado1==lado2&lado2==lado3) {
           return `equilatero` 
      } else if (lado1!==lado2&lado2!==lado3&lado1!==lado3) {
            return `escaleno`
      } else{
            return `isosceles`
      }
}

console.log (triangulo(2,3,5))*/

function Triangulo(lado1=1,lado2=1,lado3=1) {
      this._l1 = lado1
      this._l2 = lado2
      this._l3 = lado3
}
Triangulo.prototype.getLados = function() {
      return this
}
Triangulo.prototype.getPerimetro = function() {
      return this._l1+ this._l2+ this._l3
}
Triangulo.prototype.getTipo = function(){
      if (this._l1==this._l2&this._l2==this._l3) {
            return `equilatero` 
       } else if (this._l1!== this._l2 & this._l2!==this._l3& this._l1!==this._l3) {
             return `escaleno`
       } else{
             return `isosceles`
       }  
}
const t = new Triangulo (8,8,8)
console.log(t.getLados(),'su perimetro es de',t.getPerimetro(), 'este triangulo es', t.getTipo())