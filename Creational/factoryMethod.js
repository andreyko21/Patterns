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
var TransoprtCreate = /** @class */ (function () {
    function TransoprtCreate(type) {
        this.type = type;
    }
    TransoprtCreate.prototype.createOperation = function () {
        var transport = this.factoryMethod();
        return "Creator: ".concat(transport.operation());
    };
    return TransoprtCreate;
}());
var PlaneCreator = /** @class */ (function (_super) {
    __extends(PlaneCreator, _super);
    function PlaneCreator(type, maxHeight) {
        var _this = _super.call(this, type) || this;
        _this.maxHeight = maxHeight;
        return _this;
    }
    PlaneCreator.prototype.factoryMethod = function () {
        return new Plane(this.type, this.maxHeight);
    };
    return PlaneCreator;
}(TransoprtCreate));
var CarCreator = /** @class */ (function (_super) {
    __extends(CarCreator, _super);
    function CarCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarCreator.prototype.factoryMethod = function () {
        return new Car();
    };
    return CarCreator;
}(TransoprtCreate));
var Plane = /** @class */ (function () {
    function Plane(type, maxHeight) {
        this.type = type;
        this.maxHeight = maxHeight;
    }
    Plane.prototype.operation = function () {
        return 'Create new Plane';
    };
    return Plane;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.operation = function () {
        return 'Create new Car';
    };
    return Car;
}());
function clientCode(creator) {
    console.log(creator.createOperation());
}
clientCode(new PlaneCreator('Sport', 1000));
clientCode(new CarCreator('Sedan'));
