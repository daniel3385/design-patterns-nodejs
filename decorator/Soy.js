const CondimentDecorator = require("./CondimentDecorator.js")

class Soy extends CondimentDecorator{
    constructor(beverage){
	super();
	this.beverage = beverage;
    }
    getDescription(){
	return this.beverage.getDescription() + ",Soy";
    }
    cost(){
	return this.beverage.cost() + 0.15;
    }
}

module.exports = Soy;
