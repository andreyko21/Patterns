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
var Audi = /** @class */ (function () {
    function Audi() {
    }
    Audi.prototype.upgrade = function () {
        return 'Audi';
    };
    return Audi;
}());
var Decorator = /** @class */ (function () {
    function Decorator(car) {
        this.car = car;
    }
    Decorator.prototype.upgrade = function () {
        return this.car.upgrade();
    };
    return Decorator;
}());
var DecoratorA = /** @class */ (function (_super) {
    __extends(DecoratorA, _super);
    function DecoratorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecoratorA.prototype.upgrade = function () {
        return "Tuning car (".concat(_super.prototype.upgrade.call(this), ")");
    };
    return DecoratorA;
}(Decorator));
var DecoratorB = /** @class */ (function (_super) {
    __extends(DecoratorB, _super);
    function DecoratorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecoratorB.prototype.upgrade = function () {
        return "Upgrade car (".concat(_super.prototype.upgrade.call(this), ")");
    };
    return DecoratorB;
}(Decorator));
function clientCode(car) {
    console.log("RESULT: ".concat(car.upgrade()));
}
var audi = new Audi();
console.log('Client: I\'ve got a car:');
clientCode(audi);
console.log('');
var audiDecorator1 = new DecoratorA(audi);
var audiDecorator2 = new DecoratorB(audiDecorator1);
console.log('Client: Now I\'ve got a upgrade car:');
clientCode(audiDecorator2);
