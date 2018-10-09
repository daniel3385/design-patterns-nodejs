class WeatherStation{
    constructor(){
	this.observersList = new Array();
    }

    registerObserver(observer){
	this.observersList.push(observer);
    }

    removeObserver(observer){
	let observerToDeleteIndex = this.observersList.indexOf(observer);
	delete this.observersList[observerToDeleteIndex];
    }

    notifyObservers(){
	this.observersList.forEach(notifyFunction);

	function notifyFunction(observer) {
	    observer.update();
	}
	    
    }
}; 
module.exports = WeatherStation; 
