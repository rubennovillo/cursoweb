
export function app () {
      console.log('Cargada app')


      window.addEventListener('scroll', onScroll)
      let header = document.querySelector('body>header')

      function inScroll(ev) {
            let y = ev.target.scrollingElement.scrollTop
            if (y >= 30) {
                  header.classList.add('sticky')
            }
      }
      
}      