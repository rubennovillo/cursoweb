

describe ('Pruebas de números pares', () => {
   let x
    it('should be impar if n = 1'), () => {
x=1
expect(mostrar(x)).toEqual(false)

    }

    it('should be par if n = 2'), () => {
    x = 2
    expect(mostrar(x)).toEqual(true)
    }
    
    x = 345
    x = 98
    x = 0
    x = -4
    x = -5
    x = 4.3
    x = -56.7
    x = 'pepe'
    x = '56'
    mostrar(x)
})