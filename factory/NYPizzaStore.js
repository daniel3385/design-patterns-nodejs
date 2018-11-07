const PizzaStore = require("./PizzaStore.js");

const NYStyleCheesePizza = require("./NYStyleCheesePizza.js");
const NYStyleVeggiePizza = require("./NYStyleVeggiePizza.js");
const NYStyleClamPizza = require("./NYStyleClamPizza.js");
const NYStylePepperoniPizza = require("./NYStylePepperoniPizza.js");

class NYPizzaStore extends PizzaStore{
    createPizza(item) {
	if (item == "cheese") {
	    return new NYStyleCheesePizza();
	} else if (item == "veggie") {
	    return new NYStyleVeggiePizza();
	} else if (item == "clam") {
	    return new NYStyleClamPizza();
	} else if (item == "pepperoni") {
	    return new NYStylePepperoniPizza();
	} else return null;
    }
};

module.exports = NYPizzaStore;
