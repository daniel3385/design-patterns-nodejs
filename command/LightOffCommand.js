const Command = require("./Command.js");

class LightOffCommand extends Command {
    constructor(light) {
	super();
	this.light = light;
    }
    execute() {
	this.light.off();
    }
}

module.exports = LightOffCommand;
