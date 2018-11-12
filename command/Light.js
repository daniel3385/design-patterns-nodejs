class Light {
    constructor(lightLocation) {
	this.lightLocation = lightLocation;
    }
    on() {
	console.log(this.lightLocation + "light is on.");
    }
    off() {
	console.log(this.lightLocation + "light is off.");
    }
}

module.exports = Light;
