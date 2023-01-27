var Car = /** @class */ (function () {
    function Car(typeCar, model, price, year) {
        this.typeCar = typeCar;
        this.model = model;
        this.price = price;
        this.year = year;
    }
    Car.prototype.clone = function () {
        return Object.assign({}, this);
    };
    return Car;
}());
function clientCode() {
    var p1 = new Car('Suv', 'fx', 30000, 2018);
    var p2 = p1.clone();
    p2.price = 25000;
    p2.year = 2015;
    console.log(p1);
    console.log(p2);
}
clientCode();
