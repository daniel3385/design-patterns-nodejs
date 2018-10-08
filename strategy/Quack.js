const QuackBehavior = require("./QuackBehavior.js");

class Quack extends QuackBehavior{
    constructor(){
        super()
    }
    quack(){
        console.log("Quacking!");
    }
};

module.exports = Quack
