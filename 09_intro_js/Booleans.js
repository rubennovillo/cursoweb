'use strict'

let x =34

if(x >=0) {
    console.log('positivo')
} else{
    console.log('negativo')
}

let w

//falsy
w=false
w=undefined
w=null
w=0
w=''
//truely
w=true
w=23
w= -456
w=' '
w='pepe'
w={}
w=[]



if(w){
    console.log('True')
} else{
    console.log('False')
}

let q = 0
q=3

if(q) {
    console.log('q tiene valor')
} else{
    console.log('q es 0')
}
