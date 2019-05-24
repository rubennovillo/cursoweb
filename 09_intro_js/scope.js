'use scrict'
//variable de ambito (scope) Global
let a = 2
let b = 4

function prueba(){
    //variable de ámbito local a función
    var int = 3
    let i = 6
    let b = 9

    if (true) {
        //variable de ámbito local a if
        let w = 7
        var z = 4
        console.log('Es verdad')
        console.log('Desde el if', a)
        console.log('Desde el if', b)
        console.log('Desde el if', w)
    }

    console.log(a)
    console.log(b)
    //console.log('Desde la función', w)// error
    console.log('Desde la función', z)// 4

}
prueba()

console.log(a)

function ejemplo(){
    let v = 3 
}

function sample(){
    //console.log(v)//error
}

let coche = {
    c: 160,
    a: 4,
    modelo: 'RAW',
    marca: 'Toyota',
    usuarios: ['Pepe, Elena, Rosa']
}
console.log(coche)