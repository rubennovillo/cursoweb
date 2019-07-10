function Empresa(nombre, direccion, telefono, nif) {
      this.nombre = nombre
      this.direccion = direccion
      this.telefono = telefono
      this.nif = nif
}
function Item(nombre, precio, cantidad,) {
      this.articulo= nombre
      this.precio= precio
      this.cantidad= cantidad
      
}


function Factura(proveedor, cliente, fecha, items) {
      this.proveedor= proveedor
      this.cliente= cliente
      this.fecha= fecha
      this.items= items
}
function Direccion(calle, numero, ciudad) {
      this.calle = calle
      this.numero = numero
      this.ciudad = ciudad
}
function Fecha(dia, mes, año){
      this.dia = dia
      this.mes = mes
      this.año = año
}
/***********************************************************************/

const empresa1 = new Empresa('Electronica Maribel', new Direccion ('c/Alonso', '12', 'Lion'), '665178412', 'C-2687360') 
const empresa2 = new Empresa('Cheap Movile', new Direccion ('c/Trujilla', '31', 'Puente Sur' ), '679238640', 'T-9836467')
const factura = new Factura(this.preveedor(), this.cliente(), new Fecha('13', '10', '2006'), )
const item1 = [
      new Item('Angular 8.0', 30, 10),
      new Item('JS para torpes', 32, 12),
      new Item('Typescrip Avanzado', 45, 8),
      new Item('Introducción a las aplicaciones Web', 37, 11)
]