const MallarDuck = require("./MallarDuck.js") 
const DecoyDuck = require("./DecoyDuck.js") 

let mallarDuck = new MallarDuck();
mallarDuck.performQuack();
mallarDuck.performFly();
mallarDuck.display();

let decoyDuck = new DecoyDuck();
decoyDuck.performQuack();
decoyDuck.performFly();
decoyDuck.display();

let rubberDuck = new RubberDuck();
rubberDuck.performQuack();
rubberDuck.performFly();
rubberDuck.display();




