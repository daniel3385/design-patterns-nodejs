const Turkey = require("./Turkey.js");

class WildTurkey extends Turkey {
    gobble() {
	console.log("Gobble gobble");
    }
    fly() {
	console.log("I'm flying a short distance");
    }
}

module.exports = WildTurkey;

