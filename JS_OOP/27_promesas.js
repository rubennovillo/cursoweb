function asincrona() {
      return new Promise((resolve, reject) => {
            let i = Math.random()
            setTimeout( ()=> {
                  if(i < 0.8) { // ok
                        resolve('Bien ' + i)
                  } else { //error
                        reject(new Error ('Error numero ' + i))
                  }

            }, 2000 )

      })
}

asincrona()
.then((response) => {console.log(response)}, )
.catch ((error) => {console.log(error.message)})