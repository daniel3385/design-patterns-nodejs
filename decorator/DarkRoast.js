const Beverage = require("./Beverage.js")

class DarkRoast extends Beverage{
    constructor(){
	super("Dark Roast Coffee");
    }
    cost(){
	return 0.99;
    }
}

module.exports = DarkRoast;
