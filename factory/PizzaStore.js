class PizzaStore{
    createPizza(item){};
    orderPizza(type) {
	let pizza = this.createPizza(type);
	console.log("--- Making a " + pizza.getName() + " ---");
	pizza.prepare();
	pizza.bake();
	pizza.cut();
	pizza.box();
	return pizza;
    }
}

module.exports = PizzaStore;
