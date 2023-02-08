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
var AbstractPaymentMethod = /** @class */ (function () {
    function AbstractPaymentMethod() {
    }
    AbstractPaymentMethod.prototype.setNext = function (paymentMethod) {
        this.nextPaymentMethod = paymentMethod;
        return paymentMethod;
    };
    AbstractPaymentMethod.prototype.pay = function (request) {
        if (this.nextPaymentMethod) {
            return this.nextPaymentMethod.pay(request);
        }
        return '';
    };
    return AbstractPaymentMethod;
}());
var CardMethod = /** @class */ (function (_super) {
    __extends(CardMethod, _super);
    function CardMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardMethod.prototype.pay = function (method) {
        if (method === 'card') {
            return "Pay wiht ".concat(method);
        }
        return _super.prototype.pay.call(this, method);
    };
    return CardMethod;
}(AbstractPaymentMethod));
var CashMethod = /** @class */ (function (_super) {
    __extends(CashMethod, _super);
    function CashMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CashMethod.prototype.pay = function (method) {
        if (method === 'cash') {
            return "Pay with ".concat(method, ".");
        }
        return _super.prototype.pay.call(this, method);
    };
    return CashMethod;
}(AbstractPaymentMethod));
var CreditMethod = /** @class */ (function (_super) {
    __extends(CreditMethod, _super);
    function CreditMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditMethod.prototype.pay = function (method) {
        if (method === 'credit') {
            return "Pay with ".concat(method, ".");
        }
        return _super.prototype.pay.call(this, method);
    };
    return CreditMethod;
}(AbstractPaymentMethod));
function clientCode(paymentMethod) {
    var methods = ['credit', 'card', 'cash'];
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        console.log("Client: Who wants a ".concat(method, "?"));
        var result = paymentMethod.pay(method);
        if (result) {
            console.log("  ".concat(result));
        }
        else {
            console.log("  ".concat(method, " was left untouched."));
        }
    }
}
var card = new CardMethod();
var cash = new CashMethod();
var credit = new CreditMethod();
clientCode(card);
console.log('');
clientCode(cash);
