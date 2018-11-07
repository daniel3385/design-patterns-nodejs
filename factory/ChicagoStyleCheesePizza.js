const Pizza = require("./Pizza.js");

class ChicagoStyleCheesePizza extends Pizza{
    constructor(){ 
	super()
	this.name = "Chicago Style Deep Dish Cheese Pizza";
	this.dough = "Extra Thick Crust Dough";
	this.sauce = "Plum Tomato Sauce";
 
	this.toppings.push("Shredded Mozzarella Cheese");
    }
    cut(){
	console.log("Cutting the pizza into square slices");
    }
}

module.exports = ChicagoStyleCheesePizza;
