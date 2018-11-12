const Command = require("./Command.js");

class CeilingFanOffCommand extends Command {
    constructor(ceilingFan) {
	super();
	this.ceilingFan = ceilingFan;
    }
    execute() {
	this.ceilingFan.off();
    }
}
module.exports = CeilingFanOffCommand;
