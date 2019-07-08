const dado = {
      _valor: null,
      lanzar: function() {
            this._valor = parseInt(Math.random()*6) +1
            console.log(this._valor)
      }
}
for (let i = 0; i < 20; i++) {
      dado.lanzar()
      dado._valor = 6
      console.log(dado._valor)
}