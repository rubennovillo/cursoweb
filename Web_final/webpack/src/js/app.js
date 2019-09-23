
document.addEventListener('DOMContentLoader', () =>{
      console.log('app cargada')
})

let btn = document.querySelector("#btn")
let out = document.querySelector("#output")

btn.addEventListener('click', onClick)

function onClick () {
     out.innerHTML ='Hola'
     console.log (out)
}