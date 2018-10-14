const Beverage = require("./Beverage.js")

class CondimentDecorator extends Beverage{
    constructor(beverage){
	super();
	this.beverage = beverage;
    }
    cost(){}
}

module.exports = CondimentDecorator;
