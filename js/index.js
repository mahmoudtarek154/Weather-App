let weatherOneTemprature = document.querySelector(".weather-one-temprature");
let weatherOneCountry = document.querySelector(".weather-one-country");
let weatherOneStatus = document.querySelector(".weather-one-status");
let weatherOneBigicon = document.querySelector(".weather-one-bigicon");
let weatherOneStatusRain = document.querySelector(".weather-one-status-rain");
let weatherOneStatusHumidity = document.querySelector(
  ".weather-one-status-humidity"
);
let weatherOneStatusWind = document.querySelector(".weather-one-status-wind");
let search = document.querySelector(".searchinput");
let weather0neA = document.querySelector(".weather-one-A");
let weatherTwoA = document.querySelector(".weather-two-A");
let weatherTreeA = document.querySelector(".weather-three-A");
let weatherTwoBigicon = document.querySelector(".weather-two-bigicon");
let weatherThreeBigicon = document.querySelector(".weather-three-bigicon");
let weatherTwoTemprature = document.querySelector(".weather-two-temprature");
let weatherThreeTemprature = document.querySelector(
  ".weather-three-temprature"
);
let weatherTwoBTemprature = document.querySelector(".weather-twoB-temprature");
let weatherThreeBTemprature = document.querySelector(
  ".weather-threeB-temprature"
);
let weatherTwoStatus = document.querySelector(".weather-two-status");
let weatherThreeStatus = document.querySelector(".weather-Three-status");

let daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
search.addEventListener("keyup", function (e) {
  let searchvalue = e.target.value;
  request(searchvalue);
  requesttwo(searchvalue);
});
request();
requesttwo();

async function request(searchvalue = "cairo") {
  let req = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=b5abd05e0afe42b2af402838241412&q=${searchvalue}`
  );

  let data = await req.json();
  let date2 = new Date(data.forecast.forecastday[0].date);

  weatherOneTemprature.innerHTML = data.current.temp_c + "&#8451";
  weatherOneCountry.innerHTML = data.location.name;
  weatherOneStatus.innerHTML = data.current.condition.text;
  weatherOneBigicon.setAttribute("src", `https:${data.current.condition.icon}`);
  weatherOneStatusRain.innerHTML = ` ` + data.current.cloud + ` %`;
  weatherOneStatusHumidity.innerHTML = ` ` + data.current.humidity + ` %`;
  weatherOneStatusWind.innerHTML = ` ` + data.current.wind_kph + ` %`;
  weather0neA.innerHTML = daysInWeek[date2.getDay()];
}

async function requesttwo(searchvalue = "cairo") {
  let req = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=b5abd05e0afe42b2af402838241412&days=3&q=${searchvalue}`
  );

  let data = await req.json();
  let date2 = new Date(data.forecast.forecastday[1].date);
  let date3 = new Date(data.forecast.forecastday[2].date);

  weatherTwoA.innerHTML = daysInWeek[date2.getDay()];
  weatherTreeA.innerHTML = daysInWeek[date3.getDay()];

  weatherTwoBigicon.setAttribute(
    "src",
    `https:${data.forecast.forecastday[1].day.condition.icon}`
  );
  weatherThreeBigicon.setAttribute(
    "src",
    `https:${data.forecast.forecastday[2].day.condition.icon}`
  );
  weatherTwoTemprature.innerHTML =
    data.forecast.forecastday[1].day.maxtemp_c + "&#8451";
  weatherThreeTemprature.innerHTML =
    data.forecast.forecastday[2].day.maxtemp_c + "&#8451";

  weatherTwoBTemprature.innerHTML =
    data.forecast.forecastday[1].day.mintemp_c + "&#8451";
  weatherThreeBTemprature.innerHTML =
    data.forecast.forecastday[2].day.mintemp_c + "&#8451";

  weatherTwoStatus.innerHTML = data.forecast.forecastday[1].day.condition.text;
  weatherThreeStatus.innerHTML =
    data.forecast.forecastday[2].day.condition.text;
}
