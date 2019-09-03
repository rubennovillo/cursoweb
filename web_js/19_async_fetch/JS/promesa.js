function algoAsync() {
      return new Promise( (resolve, reject) =>{
            setTimeout(() => {
                  let n = Math.random()
                  if ( n < 0.8) {
                        resolve(n)
                  }else{
                        reject(n)
                  }
            }, 1000)
      })

}

algoAsync()
.then(datos => console.log('el número ' + datos + ' ha ganado'))
.catch(error => console.log('el número ' + error + ' ha perdido'))