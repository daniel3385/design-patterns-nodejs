const Expresso = require("./Expresso.js")

function printBeverage(beverage){
   console.log(beverage.getDescription() + " $" + beverage.cost()); 
}

let beverage = new Expresso();
printBeverage(beverage);

let beverage2 = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
printBeverage(beverage2); 

let beverage3 = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
printBeverage(beverage3); 
