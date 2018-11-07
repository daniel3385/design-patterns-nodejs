const PizzaStore = require("./PizzaStore.js");

const ChicagoStyleCheesePizza = require("./ChicagoStyleCheesePizza.js");
const ChicagoStyleVeggiePizza = require("./ChicagoStyleVeggiePizza.js");
const ChicagoStyleClamPizza = require("./ChicagoStyleClamPizza.js");
const ChicagoStylePepperoniPizza = require("./ChicagoStylePepperoniPizza.js");

class ChicagoPizzaStore extends PizzaStore{
    createPizza(item) {
	if (item == "cheese") {
	    return new ChicagoStyleCheesePizza();
	} else if (item == "veggie") {
	    return new ChicagoStyleVeggiePizza();
	} else if (item == "clam") {
	    return new ChicagoStyleClamPizza();
	} else if (item == "pepperoni") {
	    return new ChicagoStylePepperoniPizza();
	} else return null;
    }
};

module.exports = ChicagoPizzaStore;
