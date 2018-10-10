const Display = require("./Display.js");
const weatherStation = require("./WeatherStation.js");

class ThirdPartyDisplay extends Display{
    constructor(){
	super();
    }

    update(weatherDataTab){
	console.log("update ThirdPartyDisplay. Temperature=" + weatherDataTab["temperature"]);
    }
};
module.exports = ThirdPartyDisplay;

