const Command = require("./Command.js");

class LightOnCommand extends Command {
    constructor(light) {
	super();
	this.light = light;
    }
    execute() {
	this.light.on();
    }
}

module.exports = LightOnCommand;
