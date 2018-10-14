const CondimentDecorator = require("./CondimentDecorator.js")

class Whip extends condimentDecorator{
    constructor(beverage){
	this.beverage = beverage;
	super();
    }
    getDescription(){
	return this.beverage.getDescription() + ",Whip";
    cost(){
	return this.beverage.cost + 0.10;
    }
}

module.exports = Whip;
