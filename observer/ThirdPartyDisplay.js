const Display = require("./Display.js");

class ThirdPartyDisplay extends Display{
    constructor(){
	super();
    }

    update(){
	console.log("update ThirdPartyDisplay.");
    }
};
module.exports = ThirdPartyDisplay;

