const CondimentDecorator = require("./CondimentDecorator.js")

class Soy extends condimentDecorator{
    constructor(beverage){
	this.beverage = beverage;
	super();
    }
    getDescription(){
	return this.beverage.getDescription() + ",Soy";
    cost(){
	return this.beverage.cost + 0.15;
    }
}

module.exports = Soy;
