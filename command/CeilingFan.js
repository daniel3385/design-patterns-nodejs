class CeilingFan {
        constructor(ceilLocation) {
            this.ceilLocation = ceilLocation;
	    this.HIGH = 2;
	    this.MEDIUM = 1;
	    this.LOW = 0;
        }
        high() {
	    // turns the ceiling fan on to high
	    this.level = this.HIGH;
	    console.log(this.ceilLocation + " ceiling fan is on high");
        }
        medium() {
	    // turns the ceiling fan on to medium
	    this.level = this.MEDIUM;
	    console.log(this.ceilLocation + " ceiling fan is on medium");
        }
        low() {
	    // turns the ceiling fan on to low
	    this.level = this.LOW;
	    console.log(this.ceilLocation + " ceiling fan is on low");
        }
        off() {
	    // turns the ceiling fan off
	    this.level = 0;
	    console.log(this.ceilLocation + " ceiling fan is off");
        }
        getSpeed() {
            return this.level;
        }
}

module.exports = CeilingFan;
