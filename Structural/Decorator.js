var Calculator = /** @class */ (function () {
    function Calculator(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    Calculator.prototype.plus = function () {
        return this.value1 + this.value2;
    };
    return Calculator;
}());
var MinusDecorator = /** @class */ (function () {
    function MinusDecorator(object) {
        this.object = object;
    }
    MinusDecorator.prototype.plus = function () {
        return this.object.plus();
    };
    MinusDecorator.prototype.minus = function () {
        return this.object.value1 - this.object.value2;
    };
    return MinusDecorator;
}());
var calc = new Calculator(10, 5);
console.log(calc.plus());
var minusDec = new MinusDecorator(calc);
console.log(minusDec.minus());
