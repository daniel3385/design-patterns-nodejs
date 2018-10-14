const Beverage = require("./Beverage.js")

class Decaf extends Beverage{
    constructor(){
	super("Decaf Coffe");
    }
    cost(){
	return 1.05;
    }
}

module.exports = Decaf;
