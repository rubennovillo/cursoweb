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
      this.cuadrado = document.querySelector('#btn-cuad')
      this.triangulo = document.querySelector('#btn-trian')
      this.circulo = document.querySelector('#btn-circ')
      this.out1 = document.querySelector('#out1')
      this.out2 = document.querySelector('#out2')
      this.out3 = document.querySelector('#out3')

      //Manejadores de eventos
      this.aBtns.forEach((btn) => {
            btn.addEventListener('click', this.onBtnClick.bind(this))
      });
     
      //  console.log(this)
      }
     
      onBtnClick(ev) {
            let message
            
            switch (ev.target.id) {
                  case 'btn-cuad':
                        message = `Cuadrado`
                        break;
                  case 'btn-trian':
                        message = `Triangulo`
                        break;
                  case 'btn-circ':
                        message = 'Circulo'
            } this.out.value = message
      }
      escribir() {
      this.out.value = 
      this.cuadrado.value}
}

      //Funciones Area

     function areaCuadrado(l) {
           return l*2
     }

     console.log(areaCuadrado(25))

     function areaTriangulo(b, a){
           return b * a /2
     }
     console.log(areaTriangulo(4, 6))

     function areaCirculo(r){
           return r * r * Math.PI
     }

     console.log(areaCirculo(5))


     