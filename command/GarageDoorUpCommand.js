const Command = require("./Command.js");

class GarageDoorUpCommand extends Command {
    constructor(garageDoor) {
	super();
	this.garageDoor = garageDoor;
    }
    execute() {
	this.garageDoor.up();
    }
}
module.exports = GarageDoorUpCommand;
