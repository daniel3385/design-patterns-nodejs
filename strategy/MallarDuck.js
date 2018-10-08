var Duck = require("./Duck.js");
var Quack = require("./Quack.js");
var FlyWithWings = require("./FlyWithWings.js");

class MallarDuck extends Duck{
    constructor(){
        var quack = new Quack();
        var flyWithWings = new FlyWithWings();
        super(quack, flyWithWings);
    }

    display(){
        console.log("I'm a Mallar Duck");
    }
};

module.exports = MallarDuck;
