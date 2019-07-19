
export function app () {
      console.log('Cargada app')
      let btnSalir = document.querySelector('#btn-salir')
      let out = document.querySelector('#output')
      let btnCancelar
      let handler

      btnSalir.addEventListener('click', onClick)

      function onClick() {
            let url = 'https://www.google.com'
            let message = `
            <section>
            <p>redireccionando ...</p>
            <button id = "btn-cancelar">Cancelar</button>
            </section>
            `
            handler = setTimeout (() => {
                  location.assign(url)
            }, 2000)
            out.innerHTML = message
            btnCancelar = document.querySelector('#btn-cancelar')
            btnCancelar.addEventListener('click', onCancel)
      }
      
      function onCancel () {
            clearTimeout(handler)
            out.innerHTML = message
            
      }
      }

      