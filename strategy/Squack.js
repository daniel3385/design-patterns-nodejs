const QuackBehavior = require("./QuackBehavior.js");

class Squack extends QuackBehavior{
    constructor(){
        super()
    }
    quack(){
        console.log("Squacking!");
    }
};

module.exports = Squack
