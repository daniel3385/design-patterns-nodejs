class Singleton {
    getInstance() {}
}

let uniqueInstance = null;

module.exports = function() {
    if(!uniqueInstance) 
	uniqueInstance = new Singleton();
    return uniqueInstance;
};

