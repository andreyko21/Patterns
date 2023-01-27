var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop.prototype.orderItem = function (amount) {
        var payment = new Payment();
        var packaging = new Packaging();
        var delivery = new Delivery();
        payment.pay();
        packaging.package();
        delivery.send();
    };
    return Shop;
}());
var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment.prototype.pay = function () {
        console.log('payment process');
    };
    return Payment;
}());
var Packaging = /** @class */ (function () {
    function Packaging() {
    }
    Packaging.prototype.package = function () {
        console.log('packing process');
    };
    return Packaging;
}());
var Delivery = /** @class */ (function () {
    function Delivery() {
    }
    Delivery.prototype.send = function () {
        console.log('sending process');
    };
    return Delivery;
}());
var shop = new Shop();
shop.orderItem(4);
