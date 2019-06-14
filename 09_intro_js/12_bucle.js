let limite = 30

for (let i = 0; i < limite; i++) {
    console.log(i, i*i)   
}

const aDatos= [
    'perro',
    'gato',
    'caballo',
    'ornitorinco'
]

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    if (i > 0) {
        item = item +'s'
    }
    console.log(`tengo ${i+1} ${item}`)
    
}