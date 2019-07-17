/*const nodos={
      btn :document.querySelector('#btn'),
      btn_no :document.querySelector('#btn_no'),
      inNombre : document.querySelector('#in-nombre'),
      out1 : document.querySelector('#out1'),  
}*/

export class App {
      constructor() {
      console.log('cargada app')
      
      //Nodos de DOM
      this.aBtns = document.querySelectorAll('.btn')
      this.inNombre = document.querySelector('#in-nombre')
      this.out1 = document.querySelector('#out1')
      this.inNombre2 = document.querySelector('#in-nombre2')
      this.out2 = document.querySelector('#out2')

      //Manejadores de eventos
      this.aBtns.forEach( btn => btn.addEventListener('click', this.onBtnClick.bind(this)))
      this.inNombre2.addEventListener('input', this.escribir.bind(this))
      //  console.log(this)
      }
     
      onBtnClick(ev) {
            let message
            
            switch (ev.target.id) {
                  case 'btn':
                        message = `Hola ${this.inNombre.value}, buenas tardes`
                        break;
            
                  case 'btn_no':
                        message = `¿Por que tocas ${this.inNombre.value}?`
                        break;
                  default:
                        message = 'Boton sin funcionalidad'
            } this.out1.value = message
      }
      escribir() {
      this.out2.value = 
      this.inNombre2.value}
      } 


     /* function saludar() {
      out1.textContent =
      

      }
      function protestar() {
      out1.value = 
      `¿Por que tocas ${inNombre.value}?`
      }  
*/