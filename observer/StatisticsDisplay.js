const Display = require("./Display.js");

class StatisticsDisplay extends Display{
    constructor(){
	super();
    }

    update(){
	console.log("update StatisticsDisplay.");
    }
};
module.exports = StatisticsDisplay;

