////////Weather App///////

///Variable declaration
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
///API
const apiKey = "fff8a31decd708397abb49f7ba70f37a";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=`;
///Check Weather function
async function checkWeather(city) {
  const response = await fetch(
    apiURL + city + `&APPID=${apiKey}&units=imperial`
  );
  ///Error
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    ///Location & weather information
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".desc").innerHTML =
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1);
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".temp").innerHTML =
      data.main.temp.toFixed(0) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
      data.wind.speed.toFixed(0) + " mph";
    ////Weather icon
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
///Search button
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
