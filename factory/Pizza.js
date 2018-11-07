
class Pizza{
    constructor(){
	this.name = "pizza";
	this.dough = "dough";
	this.sauce = "sauce";
	this.toppings = [];
    }
 
    prepare(){
	console.log("Prepare " + this.name);
	console.log("Tossing dough...");
	console.log("Adding sauce...");
	console.log("Adding toppings: ");
	for (let i=0; i<this.toppings.lenght; i++) {
	    console.log("   " + this.topping[i]);
	}
    }
  
    bake() {
	console.log("Bake for 25 minutes at 350");
    }
 
    cut() {
	console.log("Cut the pizza into diagonal slices");
    }
  
    box() {
	console.log("Place pizza in official PizzaStore box");
    }
 
    getName() {
	return this.name;
    }

    toString() {
	let stringComplete = "";
	stringComplete = stringComplete + "---- " + this.name + " ----\n";
	stringComplete = stringComplete + this.dought + "\n";
	stringComplete = stringComplete + this.sauce + "\n";
	for (let i=0; i<this.toppings.lenght; i++) {
	    stringComplete = stringComplete + this.topping[i] + "\n";
	}
	return stringComplete;
    }
}

module.exports = Pizza; 
