/**
 * ASINCRONIA
 * 
 * Proceso que que consomen tiempo:
 *          -bloqueante
 *          -no bloqueante
 * 
 * Bucle con la cola de eventos
 * 
 */

 // proceso bloqueante de 1 seg
 // siguiente proceso

 //proceso no bloqueante de 1 seg
 //siguientes procesos
 setTimeout(()=>{
      console.log ('10 segundos para autodestrucción')
},1000)
setTimeout(()=>{
      console.log ('8 segundos para autodestrucción')
},3000)

setTimeout(()=>{
      console.log ('5 segundos para autodestrucción')
},5000)

setTimeout(()=>{
      console.log ('2 segundos para autodestrucción')
},8000)


setTimeout(()=>{
      console.log ('Inocenteee!!!!!')
},10000)

console.log ('11 segundos para autodestrucción')