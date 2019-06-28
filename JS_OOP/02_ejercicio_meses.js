/**Objeto meses,
 * Propiedades :meses,
 * valores en otro idioma
 * bucle nombre del mes 
 */

function traducir (){
     
      const meses = {
       Enero: 'january', 
       febrero: 'febrary',
       marzo: 'march',
       abril: 'april',
       mayo: 'may',
       junio: 'june',
       julio: 'july',
       agosto: 'august',
       septiembre: 'september',
       octubre: 'october',
       noviembre:'november',
       diciembre: 'december'
 } 
 let texto = `` 

 for (const mes in meses) {
      const ing = meses[mes];
      texto += `el mes ${mes} en ingles es ${ing} \n`
  }
  console.log(texto)
}
traducir()