import { setCookie } from "./cookie.js"
export function app () {
      console.log('Cargada app')
     
      aBotones = document.querySelectorAll ("button")

      // [iniciar,Vaciar,Mostrar,Recargar]
      output = document.querySelector ("output")

      aBotones.forEach(btn=> {
            btn.addEventListerner("click", onClick)
      });

      checkCookie()

      function onClick(ev) {
            switch (key) {
                  case iniciar:
                        setCookie('Visitas', 0, 5)
                        
                        break;
                  case vaciar:

                  
                  break;
                  case mostrar:
                  
                  break;
                  case recargar:
                        location.reload()
                  break;
            }
      }
      function checkCookie() {
            let numvisitas = getcookie('visitas')
            if (numVisitas !== '') {
                  setCookie("visitas", ++numVisitas, 5)                  
            }

      }
      }
      
      