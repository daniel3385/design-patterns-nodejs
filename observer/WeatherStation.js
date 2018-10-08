class WeatherStations{
    constructor(){
	this.observersList = new Array();
    }

    registerObserver(observer){
	this.observersList.push(observer);
    }

    removeObserver(observer){
    }

    notifyObservers(){
    }
}; 
module.exports = WeatherStations; 
