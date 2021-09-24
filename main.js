const submitBtn = document.querySelector("button")
const weatherApi = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=1&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=FMMPW2TY4PK4WJ8QSL4PZSH4L&dataElements=default"
const errorSection = document.getElementById("errorMsg")

submitBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const ul = document.getElementById("cities")
  ul.innerHTML = ""
  const cityName = document.querySelector("input").value
  if(invalidCityName(cityName)) {
    errorSection.innerHTML = "Please enter a valid city name. Must not contain special characters."
  }else {
    errorSection.innerHTML = ""
    fetchWeatherForcast(cityName, ul, errorSection)
  }
})

function fetchWeatherForcast(cityName, foreCastSection, errorSection) {
  const apiUrl = `${weatherApi}&location=${cityName}`
  fetch(apiUrl).then(response => response.json())
  .then(data => {
    if(data.errorCode === 999) {
      errorSection.innerHTML = "City does not exists. Check spelling."
    }else {
      const address = data.location.address 
      const foreCastValues = data.location.values.splice(0, 24)
      foreCastValues.map(value => {
        const listItem = generateForeCasts(value, address)
        foreCastSection.innerHTML += listItem
      })
    }
  })
}

function invalidCityName(cityName) {
  const specials = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  return cityName === "" || specials.test(cityName)
}

function generateForeCasts(value, city) {
  const date = value.datetimeStr.split("T")[0]
  const time = value.datetimeStr.split("T")[1].split("+")[0].split("-")[0]
  return `<li>
    <h3><span class="left">${city}</span><span class="right">${date}</span></h3>
    <h2><span class="left">${value.conditions}</span><span class="right">${time}</span></h2>
    <p>Temprature : ${value.temp}</p>
    <p>Visibility : ${value.visibility}</p>
    <p>Wind Speed : ${value.wspd}</p>
    <p>Humidity : ${value.humidity}</p>
  </li>`
}