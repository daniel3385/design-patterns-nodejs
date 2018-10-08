var Duck = require("./Duck.js");
var Squack = require("./Squack.js");
var FlyNoWay = require("./FlyNoWay.js");

class RubberDuck extends Duck{
    constructor(){
        var sQuack = new Squack();
        var flyNoWay = new FlyNoWay();
        super(sQuack, flyNoWay);
    }

    display(){
        console.log("I'm a Rubber Duck");
    }
};

module.exports = RubberDuck;
