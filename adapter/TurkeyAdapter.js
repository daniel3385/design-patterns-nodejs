const Duck = require("./Duck.js");

class TurkeyAdapter extends Duck {
    constructor(turkey) {
	super();
	this.turkey = turkey;
    }
    quack() {
	this.turkey.gobble();
    }
    fly() {
	for(let i=0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}

module.exports = TurkeyAdapter;
