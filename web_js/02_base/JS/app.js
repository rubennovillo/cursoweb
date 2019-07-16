console.log('cargada app')
console.log(document)
console.dir(document)

/*const nodos={
      btn :document.querySelector('#btn'),
      btn_no :document.querySelector('#btn_no'),
      inNombre : document.querySelector('#in-nombre'),
      out1 : document.querySelector('#out1'),  
}*/
const btn = document.querySelector('#btn')
const btn_no = document.querySelector('#btn_no')
const inNombre = document.querySelector('#in-nombre')
const out1 = document.querySelector('#out1')
const inNombre2 = document.querySelector('#in-nombre2')
const out2 = document.querySelector('#out2')
/*document.querySelector('#btn').onclick = saludar
document.querySelector('#btn_no').onclick = protestar*/
btn.addEventListener('click', saludar)
btn_no.addEventListener('click', protestar)
inNombre2.addEventListener('input', escribir)

function saludar() {
      out1.textContent =
      `Hola ${inNombre.value}, buenas tardes`
     
}
function protestar() {
      out1.value = 
      `¿Por que tocas ${inNombre.value}?`
}

function escribir() {
      out2.value = 
      `${inNombre2.value}`
}




