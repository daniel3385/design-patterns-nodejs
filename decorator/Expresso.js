const Beverage = require("./Beverage.js")

class Expresso extends Beverage{
    constructor(){
	super("Expresso");
    }
    cost(){
	return 1.99;
    }
}

module.exports = Expresso;
