const CondimentDecorator = require("./CondimentDecorator.js")

class Milk extends condimentDecorator{
    constructor(beverage){
	this.beverage = beverage;
	super();
    }
    getDescription(){
	return this.beverage.getDescription() + ",Milk";
    cost(){
	return this.beverage.cost + 0.10;
    }
}

module.exports = Milk;
