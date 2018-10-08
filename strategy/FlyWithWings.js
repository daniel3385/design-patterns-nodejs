const FlyBehavior = require("./FlyBehavior.js");

class FlyWithWings extends FlyBehavior{
    constructor(){
        super()
    }
    fly(){
        console.log("Flying with wings!");
    }
};

module.exports = FlyWithWings
