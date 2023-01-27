"use strict";
exports.__esModule = true;
exports.Box = exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(price, name) {
        this.price = price;
        this.name = name;
    }
    Phone.prototype.getPrice = function () {
        return this.price;
    };
    Phone.prototype.getName = function () {
        return this.name;
    };
    Phone.prototype.addPhone = function () { };
    return Phone;
}());
exports.Phone = Phone;
var Box = /** @class */ (function () {
    function Box() {
        this.phones = [];
    }
    Box.prototype.getPrice = function () {
        var allPrice = this.phones.reduce(function (acc, phone) { return acc + phone.getPrice(); }, 0);
        return allPrice;
    };
    Box.prototype.getName = function () {
        var allPhoneNames = this.phones.reduce(function (acc, phone) { return acc + phone.getName() + ", "; }, "");
        return allPhoneNames;
    };
    Box.prototype.addPhone = function (phone) {
        this.phones.push(phone);
    };
    return Box;
}());
exports.Box = Box;
var phone1 = new Phone(200, "Samsung S7");
var phone2 = new Phone(350, "Iphone 11");
var box1 = new Box();
var box2 = new Box();
box2.addPhone(box1);
console.log("phone1 price: ".concat(phone1.getPrice(), ",00$, name: ").concat(phone1.getName()));
console.log("phone2 price: ".concat(phone2.getPrice(), ",00$, name: ").concat(phone2.getName()));
box1.addPhone(phone1);
box1.addPhone(phone2);
box2.addPhone(new Phone(500, "Samsung S20"));
console.log("box1 price: ".concat(box1.getPrice(), ",00$, names: ").concat(box1.getName()));
console.log("box2 price: ".concat(box2.getPrice(), ",00$, names: ").concat(box2.getName()));
