const weatherStation = require("./WeatherStation.js");

const statisticsDisplay = require("./StatisticsDisplay.js");
const thirdPartyDisplay = require("./ThirdPartyDisplay.js");
const forecastDisplay = require("./ForecastDisplay.js");

let myWeatherStation = new weatherStation();

let myStatisticsDisplay = new statisticsDisplay();
let myThirdPartyDisplay = new thirdPartyDisplay();
let myForecastDisplay = new forecastDisplay();

myWeatherStation.registerObserver(myStatisticsDisplay);
myWeatherStation.registerObserver(myThirdPartyDisplay);
myWeatherStation.registerObserver(myForecastDisplay);

myWeatherStation.setTemperature(25);
myWeatherStation.notifyObservers();

myWeatherStation.setTemperature(28);
myWeatherStation.notifyObservers();
