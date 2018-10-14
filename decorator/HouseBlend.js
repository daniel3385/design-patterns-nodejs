const Beverage = require("./Beverage.js")

class HouseBlend extends Beverage{
    constructor(){
	super("House Blend Coffee");
    }
    cost(){
	return 0.89;
    }
}

module.exports = HouseBlend;
