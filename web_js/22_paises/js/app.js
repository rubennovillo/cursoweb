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

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => init(data))
.catch(err => console.log("Error:", err))

function init(countriesData) {
  countries = countriesData
  let options = ""
 
  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`)

  countriesList.innerHTML = options
}

function CountryInfo(countryInfo) {
  let countryData = countries.find(country => country.alpha3Code == countryInfo)
  document.querySelector("#flag-container img").src = countryData.flag;
  document.getElementById("capital").innerHTML = countryData.capital
  document.getElementById("region").innerHTML = countryData.region
  document.getElementById("subregion").innerHTML = countryData.subregion
}