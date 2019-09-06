const world = 'https://restcountries.eu/rest/v2/all' 

// Nodos del DOM
let regionsList = document.querySelector("#continente")
let countriesList = document.querySelector("#pais")


// Asociación de manejadores de eventos

regionsList.addEventListener("change", newRegionSelection)
countriesList.addEventListener("change", newCountrySelection)

 // Funciones manejadoras de eventos
function newRegionSelection(ev) {
  
}

function newCountrySelection(ev) {
  CountryInfo(ev.target.value)
}

fetch(world)
.then(response => response.json())
.then(data => init(data))

function init(paisData) {
  countries = paisData
  let opciones = ""
 //pais.alpha3Code
  countries.forEach(pais => opciones+=`<option value="${pais.name}"></option>`)

  countriesList.innerHTML = opciones
}

function CountryInfo(Info) {
  let countryData = countries.find(country => country.alpha3Code == Info)
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#capital").innerHTML = countryData.capital
  document.querySelector("#region").innerHTML = countryData.region
  document.querySelector("#subregion").innerHTML = countryData.subregion
  document.querySelector("#languaje").innerHTML = countryData.demonym
  document.querySelector("#nativo").innerHTML = countryData.nativeName
  document.querySelector("#area").innerHTML = `${countryData.area} KM²`
  

}