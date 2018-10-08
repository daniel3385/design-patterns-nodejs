const weatherStation = require("./WeatherStations.js");

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
myWeatherStation.setHumidity(80);
myWeatherStation.setPressure(1);
myWeatherStation.notifyObservers();

myWeatherStation.setTemperature(28);
myWeatherStation.setHumidity(95);
myWeatherStation.setPressure(0.8);
myWeatherStation.notifyObservers();
