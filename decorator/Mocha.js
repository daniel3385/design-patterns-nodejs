const CondimentDecorator = require("./CondimentDecorator.js")

class Mocha extends CondimentDecorator{
    constructor(beverage){
	super();
	this.beverage = beverage;
    }
    getDescription(){
	return this.beverage.getDescription() + ",Mocha";
    }
    cost(){
	return this.beverage.cost() + 0.20;
    }
}

module.exports = Mocha;
