const FlyBehavior = require("./FlyBehavior.js");

class FlyNoWay extends FlyBehavior{
    constructor(){
        super()
    }
    fly(){
        console.log("Flying no way!");
    }
};

module.exports = FlyNoWay
