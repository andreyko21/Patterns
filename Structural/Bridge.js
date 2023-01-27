var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW() {
    }
    BMW.prototype.addBody = function () {
        console.log('add body BMW');
    };
    BMW.prototype.addWheals = function () {
        console.log("add wheals BMW");
    };
    return BMW;
}());
var Audi = /** @class */ (function () {
    function Audi() {
    }
    Audi.prototype.addBody = function () {
        console.log('add body Audi');
    };
    Audi.prototype.addWheals = function () {
        console.log("add wheals Audi");
    };
    return Audi;
}());
var CreateCar = /** @class */ (function () {
    function CreateCar(car) {
        this.car = car;
    }
    CreateCar.prototype.create = function () {
        this.car.addBody();
        this.car.addWheals();
    };
    return CreateCar;
}());
var RedCar = /** @class */ (function (_super) {
    __extends(RedCar, _super);
    function RedCar(car) {
        return _super.call(this, car) || this;
    }
    RedCar.prototype.color = function () {
        console.log('add color red');
    };
    RedCar.prototype.create = function () {
        _super.prototype.create.call(this);
        this.color();
    };
    return RedCar;
}(CreateCar));
var BlackCar = /** @class */ (function (_super) {
    __extends(BlackCar, _super);
    function BlackCar(car) {
        return _super.call(this, car) || this;
    }
    BlackCar.prototype.color = function () {
        console.log('add color black');
    };
    BlackCar.prototype.create = function () {
        _super.prototype.create.call(this);
        this.color();
    };
    return BlackCar;
}(CreateCar));
var bmw = new RedCar(new BMW());
bmw.create();
var audi = new BlackCar(new Audi());
audi.create();
