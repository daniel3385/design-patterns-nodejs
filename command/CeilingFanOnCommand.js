const Command = require("./Command.js");

class CeilingFanOnCommand extends Command {
    constructor(ceilingFan) {
	super();
	this.ceilingFan = ceilingFan;
    }
    execute() {
	this.ceilingFan.high();
    }
}
module.exports = CeilingFanOnCommand;
