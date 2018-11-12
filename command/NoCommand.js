const Command = require("./Command.js");

class NoCommand extends Command {
    execute(){
	console.log("no command.");
    }
}
module.exports = NoCommand;
