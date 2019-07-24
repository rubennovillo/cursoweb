/*const nodos={
      btn :document.querySelector('#btn'),
      btn_no :document.querySelector('#btn_no'),
      inNombre : document.querySelector('#in-nombre'),
      out1 : document.querySelector('#out1'),  
}*/

export function app() {
      console.log('cargada app')

      class Lista extends Array {}

      let x = new Lista()
      let nodo = document.querySelector ('#nodos')
      console.dir(nodo instanceof Element)
      console.dir(nodo instanceof HTMLElement)
 
}

