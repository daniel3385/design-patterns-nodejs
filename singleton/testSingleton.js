const Singleton = require("./Singleton.js");

let singleton1 = new Singleton;
let singleton2 = new Singleton;
console.log(singleton1.getInstance() == singleton2.getInstance());
