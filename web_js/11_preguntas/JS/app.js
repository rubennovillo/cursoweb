
export function app () {
      console.log('Cargada app')
      let h2 = document.querySelector('h2')
      h2.id = "h2-01"
      h2.name = " h2-01"
      h2.setAttribute('title', 'Titulo de la sección')

      let aBtn = document.querySelectorAll('.btn')
      let texto = document.querySelector('#texto')
      aBtn.forEach (
            btn =>btn.addEventListener('click', onClick))

      function onClick() {
      texto.classList.toggle('none')
      aBtn.forEach (
            btn =>btn.classList.toggle('none'))
      }
}