/*const nodos={
      btn :document.querySelector('#btn'),
      btn_no :document.querySelector('#btn_no'),
      inNombre : document.querySelector('#in-nombre'),
      out1 : document.querySelector('#out1'),  
}*/

export function app() {
      console.log('cargada app')

            const alinks = document.querySelectorAll('a')

            alinks.forEach(enlace => enlace
                  .addEventListener('click', onClickEnlace))

            
      
      function onClickEnlace(ev) {
            ev.target.outerHTML = "jajajajajja"
      }

}
      //Creacion de nodos

      let origen =document.querySelector('.addNodos div')
      let txtHTML = '<p>Este parrafo esta construido en html</p>'
      origen.innerHTML = txtHTML

      let content = document.createTextNode('creade desde JS')
      html.appendChild(content)
      let html = document.createElement ('p')
      console.log(html)