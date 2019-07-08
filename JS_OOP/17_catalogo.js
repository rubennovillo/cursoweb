/** Function (class) Libro
 * 
 * @property {string} descripcion 
 * @property {string} codigo 
 * @property {number} precio 
 * @property {number} IVA
 * @method {object} calularIVA 
 * @method {void} mostrar
 */

function Libro(descripcion = '', codigo = '', precio = 0) {
      this.descripcion = descripcion
      this.codigo = codigo
      this.precio = precio
      
}
      
      Libro.prototype.iva = 0.04
      Libro.prototype.calcularIVA = function () {
           return {
                iva: this.precio * this.iva,
                total: this.precio + (this.precio * this.iva)
      }
}
      Libro.prototype.mostrar = function () {
            const {iva, total} =this.calcularIVA
            const cadena =`
            descripción: ${this.descripcion}
            codigo: ${this.codigo}
            precio: ${this.precio}
            IVA: ${iva}
            precio total: ${total}`
            console.log(cadena)
      }

      

      const l1 = new Libro('Las ranas','00345Y4', 22)
      l1.mostrar()
      console.log (l1)
      const l2 = new Libro('Ulular','00575Y4', 29)
      l2.mostrar()
      console.log (l2)
      const l3 = new Libro('Personas violentas','00085Y4', 15)
      l3.mostrar()
      console.log (l3)
