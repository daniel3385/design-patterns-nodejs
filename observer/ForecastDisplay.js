const Display = require("./Display.js");

class ForecastDisplay extends Display{
    constructor(){
	super();
    }

    update(){
	console.log("update ForecastDisplay.");
    }
};
module.exports = ForecastDisplay;

