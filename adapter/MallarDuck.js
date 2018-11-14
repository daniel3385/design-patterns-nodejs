const Duck = require("./Duck.js");

class MallarDuck extends Duck {
    quack() {
	console.log("Quack");
    }
    fly() {
	console.log("I'm flying");
    }
}

module.exports = MallarDuck;
