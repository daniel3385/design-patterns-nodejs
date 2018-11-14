const MallarDuck = require("./MallarDuck.js");
const WildTurkey = require("./WildTurkey.js");
const TurkeyAdapter = require("./TurkeyAdapter.js");

function testDuck(duck) {
    duck.quack();
    duck.fly();
}

let duck = new MallarDuck();

let turkey = new WildTurkey();
let turkeyAdapter = new TurkeyAdapter(turkey);

console.log("The Turkey says...");
turkey.gobble();
turkey.fly();

console.log("\nThe Duck says...");
testDuck(duck);

console.log("\nThe TurkeyAdapter says...");
testDuck(turkeyAdapter);


