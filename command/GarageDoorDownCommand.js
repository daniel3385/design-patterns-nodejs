const Command = require("./Command");

class GarageDoorDownCommand extends Command {
    constructor(garageDoor) {
	super();
	this.garageDoor = garageDoor;
    }
    execute() {
	this.garageDoor.down();
    }
}

module.exports = GarageDoorDownCommand;
