var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.doSomeLogic = function () {
        console.log('Logic');
        var result = this.strategy.Cost();
        console.log(result);
    };
    return Context;
}());
var Bike = /** @class */ (function () {
    function Bike() {
        this.cost = 1;
    }
    Bike.prototype.Cost = function () {
        return "Cost: ".concat(this.cost);
    };
    return Bike;
}());
var Car = /** @class */ (function () {
    function Car() {
        this.cost = 5;
    }
    Car.prototype.Cost = function () {
        return "Cost: ".concat(this.cost);
    };
    return Car;
}());
var context = new Context(new Car());
console.log('Client: rent bike.');
context.setStrategy(new Bike());
context.doSomeLogic();
console.log('');
console.log('Client: rent car.');
context.setStrategy(new Car());
context.doSomeLogic();
