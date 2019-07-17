/*const nodos={
      btn :document.querySelector('#btn'),
      btn_no :document.querySelector('#btn_no'),
      inNombre : document.querySelector('#in-nombre'),
      out1 : document.querySelector('#out1'),  
}*/

export function app() {
      console.log('cargada app')
      console.log(document)
      console.dir(document)

      const aBtns = document.querySelectorAll('.btn')
      /* const btn = document.querySelector('#btn')
      const btn_no = document.querySelector('#btn_no') */
      const inNombre = document.querySelector('#in-nombre')
      const out1 = document.querySelector('#out1')
      const inNombre2 = document.querySelector('#in-nombre2')
      const out2 = document.querySelector('#out2')
      /*document.querySelector('#btn').onclick = saludar
      document.querySelector('#btn_no').onclick = protestar*/
      aBtns.forEach( btn => 
            btn.addEventListener('click', onBtnClick))
      
      
      inNombre2.addEventListener('input', escribir)

      function onBtnClick(ev) {
            let message
            
            switch (ev.target.id) {
                  case 'btn':
                        message = `Hola ${inNombre.value}, buenas tardes`
                        break;
            
                  case 'btn_no':
                        message = `¿Por que tocas ${inNombre.value}?`
                        break;
                  default:
                        message = 'Boton sin funcionalidad'
            } out1.value = message
      }
      function escribir() {
      out2.value = 
      `${inNombre2.value}`
      } 
}

     /* function saludar() {
      out1.textContent =
      

      }
      function protestar() {
      out1.value = 
      `¿Por que tocas ${inNombre.value}?`
      }  
*/