const QuackBehavior = require("./QuackBehavior.js");

class MuteQuack extends QuackBehavior{
    constructor(){
        super()
    }
    quack(){
        console.log("Mute!");
    }
};

module.exports = MuteQuack
