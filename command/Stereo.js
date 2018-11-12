class Stereo {
    constructor(stereoLocation) {
	this.stereoLocation = stereoLocation;
    }
    on() {
	console.log(this.stereoLocation + " stereo is on");
    }
    off() {
	console.log(this.stereoLocation + " stereo is off");
    }
    setCD() {
	console.log(this.stereoLocation + " stereo is set for CD input");
    }
    setDVD() {
	console.log(this.stereoLocation + " stereo is set for DVD input");
    }
    setRadio() {
	console.log(this.stereoLocation + " stereo is set for Radio");
    }
    setVolume(volume) {
	// code to set the volume
	// valid range: 1-11 (after all 11 is better than 10, right?)
	console.log(this.stereoLocation + " Stereo volume set to " + volume);
    }
}

module.exports = Stereo;
