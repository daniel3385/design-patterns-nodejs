const Beverage = require("./Beverage.js")

class CondimentDecorator extends Beverage{
    constructor(beverage){
	this.beverage = beverage;
	super();
    }
    cost(){}
}

module.exports = CondimentDecorator;
