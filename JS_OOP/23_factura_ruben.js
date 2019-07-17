

//MODELOS

const {fechaEsp, fijarLongitudCadena} = require('./15_helpers.js')

function Factura (  empresa = {}, 
                    cliente = {},
                    items = [{}],
                    numFactura = '',
                    tipoIVA = '',
                    formaPago = '',
                    fecha = new Date()) {
    this.empresa = empresa
    this.cliente = cliente
    this.items = items
    this.numFactura = numFactura
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
    this.fecha = fecha
}

function Empresa (nombre, direccion, telefono, nif) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.nif = nif
}

function Item (descripcion, precioU) {
    this.descripcion = descripcion
    this.precioU = precioU
}

function Compra (item, cantidad = 0) {
    this.descripcion = item.descripcion
    this.precioU = item.precioU
    this.cantidad = cantidad
}

function Direccion(calle, num, poblacion, pais) {
    this.calle = calle
    this.num = num
    this.poblacion = poblacion
    this.pais = pais 
}

Direccion.prototype.toString = function () {
    return `${this.calle} ${this.num} ${this.poblacion} - ${this.pais}`
}

Factura.prototype.calcularImporte = function() {
    const importe = {} 
    importe.base = 
        this.items
        .map( libro => libro.precioU * libro.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe    
}

Factura.prototype.listarItems = function() {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30)
            let pv = item.precioU
                .toLocaleString('es', {style: 'currency', currency: 'EUR'})
            let cant = item.cantidad
            items += 
`
    ${desc}     ${pv}          ${cant}
`
    })
    return items
}

Factura.prototype.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =
`
    _______________________________________________________________
                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telefono}
                                        ${this.empresa.nif}
    Num. Factura: ${this.numFactura}
    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telefono}
    ${this.cliente.nif}
    Descripción                         Precio      Cantidad
    _______________________________     _______     ________
    ${this.listarItems()}
    Importe ....................................${importe.base
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    IVA ........................................${importe.iva
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Importe Total ..............................${importe.total
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Forma de Pago ..............................${this.formaPago}
    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
    return factura
}

// Factura.prototype.mostrarImporte = function() {}

Factura.prototype.render = function () {
    console.log(this.prepararFactura())
}

Factura.prototype.resumir = function () {
    console.log (
`Factura: ${this.numFactura}: ${this.calcularImporte().total}`
    )
}


//EMPRESAS

module.exports.tuata = new Empresa(
      'Ediciones Tuatalug',
      new Direccion('c/ Pez', '1', 'Madrid', 'España'),
      '625875921',
      'T-34761234',)
  
  module.exports.boracai = new Empresa(
          'Librería Boracai',
          new Direccion ('c/ Carranza', '5', 'Cádiz', 'España'),
          '625493421',
          'F-76521743')
  
  module.exports.pepita = new Empresa(
              'Librería Pepita',
              new Direccion ('c/ Burgo', '5', 'Estrasburgo', 'Francia'),
              '625492190',
              'F-76534127')


//PRODUCTOS

const {Item} = require('./23_modelos.js')

module.exports = {}

module.exports.libros = [
    new Item('Angular 8.0', 30),
    new Item('JS para torpes', 32),
    new Item('Typescrip Avanzado', 45),
    new Item('Introducción a las aplicaciones Web', 37),
]

module.exports.revistas = [
    new Item('L1', 40), 
    new Item('L2', 50), 
    new Item('L3', 56)    
]

//FACTURAS

const items1 =  [[0, 12], [1, 12], [2, 8], [3, 11]] 
    .map(a => new Compra(libros[a[0]], a[1]))

const factura_12 = new Factura(

    tuata, boracai, items1, '000000012',
    0.04, 'Contado', new Date()
)

factura_12.render()

const items2 = [[0, 20], [2, 12], [3, 21]]
.map(a => new Compra(libros[a[0]], a[1]))


const factura_13 = new Factura(
    tuata, pepita, items2, '000000013',
    0.04, 'Transferencia', new Date()
)

factura_13.render()

new Factura (
    tuata, pepita,
    [new Compra(revistas[0], 12), new Compra(revistas[1], 6), 
    new Compra(revistas[2], 17)], '000000014', 0.04, 
    'Efectivo', new Date()
).render()

