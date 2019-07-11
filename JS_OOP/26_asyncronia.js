const respuesta = [
      'Cafe expreso',
      'Cafe con leche',
      'Capuchino',
      'Manchado',
      'Cafe Irlandes',
      'Americano',
      'Cafe Bombon',
      'Mocachino',
      'Frappe'
]


function leerDatosAsinc(i, timer = 1000, callback) {
      return setTimeout(
          () => {
              let datos
              console.log(`¿Que va a tomar? ${i}`)
             
              callback(datos)
              leerDatosAsinc(2, 1000, (datos) => {
                  console.log(datos)
              })
          }, timer)
  } 
  
  leerDatosAsinc(1, 2000, (datos) => {console.log(datos)}
      
  )
  console.log('Leyendo los datos')

