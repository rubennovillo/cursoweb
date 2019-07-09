function Proveedor(nombre, direccion, telefono, nif) {
      this.nombre = nombre
      this.direccion = direccion
      this.telefono = telefono
      this.nif = nif
}
function Cliente(nombre, direccion, telefono, nif) {
      this.nombre = nombre
      this.direccion = direccion
      this.telefono = telefono
      this.nif = nif
}
function Item(nombre, precio) {
      this.nombre = nombre
      this.precio = precio
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
/***********************************************************************/

const empresa1 = new Proveedor('Electronica Maribel', new Direccion ('c/Alonso', 12, 'Lion'), 665178412, 'C-2687360') 
const empresa2 = new Cliente('Cheap Movile', new Direccion ('c/Trujilla', 31, 'Puente Sur' ), 679238640, 'T-9836467')
const factura = new Factura(new Proveedor, new Cliente)
const item1 = new Item(movil, 100);