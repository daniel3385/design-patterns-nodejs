class WeatherStation{
    constructor(){
	this.observersList = new Array();
	this.temperature = 0;
    }

    registerObserver(observer){
	this.observersList.push(observer);
    }

    removeObserver(observer){
	let observerToDeleteIndex = this.observersList.indexOf(observer);
	delete this.observersList[observerToDeleteIndex];
    }

    notifyObservers(){
	for(let i=0; i<this.observersList.length; i++){
	    this.observersList[i].update({"temperature":this.temperature})
	}
    }
    setTemperature(temperature){
	this.temperature = temperature;
    }
    getTemperature(){
	return this.temperature;
    }
}; 
module.exports = WeatherStation; 
