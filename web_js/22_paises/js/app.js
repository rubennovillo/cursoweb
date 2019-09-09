const world = 'https://restcountries.eu/rest/v2/all' 
const region = 'https://restcountries.eu/rest/v2/region/'
// Nodos del DOM
let regionsList = document.querySelector("#continente")
let countriesList = document.querySelector("#pais")


// Asociación de manejadores de eventos

// regionsList.addEventListener("change", newRegionSelection)
countriesList.addEventListener("change", newCountrySelection)

 // Funciones manejadoras de eventos

 /* function newRegionSelection(ev) {
  Regionselect(ev.target.value)
}

fetch(region + ev.target.value)
.then(response => response.json())
.then(data => chose(data))

function chose (choseData) {
  regions = choseData
  let options = ""
 regions.forEach(pais => options +=`<option value ="${pais.region}">${pais.region}</option>`)

 regionsList.innerHTML = options
}*/
function newCountrySelection(ev) {
  CountryInfo(ev.target.value)
}


fetch(world)
.then(response => response.json())
.then(data => init(data))



function init(paisData) {
  countries = paisData
  let opciones = ""
 
  countries.forEach(pais => opciones+=`<option value="${pais.name}">${pais.name}</option>`)

  countriesList.innerHTML = opciones
}

function CountryInfo(Info) {
  let countryData = countries.find(country => country.name == Info)
  document.querySelector("#flag img").src= countryData.flag;
  document.querySelector("#capital").innerHTML = countryData.capital
  document.querySelector("#region").innerHTML = countryData.region
  document.querySelector("#subregion").innerHTML = countryData.subregion
  document.querySelector("#languaje").innerHTML = countryData.demonym
  document.querySelector("#nativo").innerHTML = countryData.nativeName
  document.querySelector("#area").innerHTML = `${countryData.area} KM²`
  
}