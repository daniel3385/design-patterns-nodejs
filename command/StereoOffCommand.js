const Command = require("./Command.js");

class StereoOffCommand extends Command {
    constructor(stereo) {
	super();
	this.stereo = stereo;
    }
    execute() {
	this.stereo.off();
    }
}

module.exports = StereoOffCommand;
