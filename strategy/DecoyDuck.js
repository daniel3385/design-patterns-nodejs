var Duck = require("./Duck.js");
var MuteQuack = require("./MuteQuack.js");
var FlyNoWay = require("./FlyNoWay.js");

class DecoyDuck extends Duck{
    constructor(){
        var muteQuack = new MuteQuack();
        var flyNoWay = new FlyNoWay();
        super(muteQuack, flyNoWay);
    }

    display(){
        console.log("I'm a Decoy Duck");
    }
};

module.exports = DecoyDuck;
