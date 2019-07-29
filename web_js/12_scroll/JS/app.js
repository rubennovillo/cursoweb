export function app() {
      console.log('Cargada app') 
  
      window.addEventListener('scroll', onScroll)
      window.addEventListener('resize', calcularOffset)
      let header = document.querySelector('body>header')
      let divTop = document.querySelector('div.top')
      let aSections = document.querySelectorAll('section')
      let isSticky = false;
      let aOffsets = []
      calcularOffset()
  
      let aEnlaces = document.querySelectorAll('nav a')
      aEnlaces.forEach((enlace, i) => enlace.addEventListener(
          'click', (ev) => {onClickMenu(ev, i) }
      ))
  
      function calcularOffset () {
          aOffsets = []
          aSections.forEach( 
          item => aOffsets.push(item.offsetTop)
          )
          console.dir(aOffsets)    
      }
  
  
      function onScroll(ev) {
          // console.log(ev)
          let y = ev.target.scrollingElement.scrollTop
          //console.log(y)
          if (y >= 40 && !isSticky) {
              header.classList.add('sticky')
              divTop.classList.add('top-sticky')
              isSticky = !isSticky
              calcularOffset()
          } else if (y < 40 && isSticky ) {
              header.classList.remove('sticky')
              divTop.classList.remove('top-sticky')
              calcularOffset()
              isSticky = !isSticky
          }
          spyScroll(y)
      }
      function spyScroll(scrollElement){
        aOffsets[0]
        if (scrollElement < aOffsets[1]-120){
            setActive(0)
        }else if(scrollElement < aOffsets[2]-120){
            setActive(1)
        }else if(scrollElement < aOffsets[3]-120){
            setActive(2)
        }else if(scrollElement < aOffsets[4]-120){ 
            setActive(3)
        }else{
            setActive(4) 
      }}
  
      function onClickMenu(ev, i) {
          ev.preventDefault()
          console.log(aOffsets[i])
          window.scrollTo(0,aOffsets[i]-120)
          aEnlaces.forEach(enlace =>
            enlace.classList.remove('active'))
            aEnlaces[i].classList.add('active')
      }
      function setActive(i){
          aEnlaces.forEach(enlace =>
            enlace.classList.remove('active'))
            aEnlaces[i].classList.add('active')
            
            
      }  
   }