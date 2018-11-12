const NoCommand = require("./NoCommand.js");

class RemoteControl {
    constructor() {
	this.onCommands = new Array(7);
	this.offCommands = new Array(7);

	this.noCommand = new NoCommand();

	for (let i = 0; i < 7; i++) {
	    this.onCommands[i] = this.noCommand;
	    this.offCommands[i] = this.noCommand;
	}
    }

    setCommand(slot, onCommand, offCommand) {
	this.onCommands[slot] = onCommand;
	this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot) {
	this.onCommands[slot].execute();
    }

    offButtonWasPushed(slot) {
	this.offCommands[slot].execute();
    }

    toString() {
	let stringBuff = "";
	stringBuff = stringBuff + "\n------ Remote Control -------\n";
	for (i = 0; i < this.onCommands.length(); i++) {
	    stringBuff = stringBuff +"[slot " + i + "] " + this.onCommands[i].getClass().getName()
		+ "    " + this.offCommands[i].getClass().getName() + "\n";
	}
	return stringBuff;
    }
}

module.exports = RemoteControl;
