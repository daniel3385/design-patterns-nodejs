class GarageDoor {
    constructor(doorLocation) {
        this.doorLocation = doorLocation;
    }
    up() {
	console.log(this.doorLocation + " garage Door is Up");
    }
    down() {
	console.log(this.doorLocation + " garage Door is Down");
    }
    stop() {
	console.log(this.doorLocation + " garage Door is Stopped");
    }
    lightOn() {
	console.log(this.doorLocation + " garage light is on");
    }
    lightOff() {
	console.log(this.doorLocation + " garage light is off");
    }
}
module.exports = GarageDoor;
