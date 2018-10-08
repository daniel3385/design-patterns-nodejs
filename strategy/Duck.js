
class Duck{
    constructor(QuackBehavior, FlyBehavior){
        this.quackBehavior = QuackBehavior;
        this.flyBehavior = FlyBehavior;
    }

    performQuack(){
        this.quackBehavior.quack();
    }

    performFly(){
        this.flyBehavior.fly();
    }

};

module.exports = Duck;
