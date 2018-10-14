const CondimentDecorator = require("./CondimentDecorator.js")

class Mocha extends condimentDecorator{
    constructor(beverage){
	this.beverage = beverage;
	super();
    }
    getDescription(){
	return this.beverage.getDescription() + ",Mocha";
    cost(){
	return this.beverage.cost + 0.20;
    }
}

module.exports = Mocha;
