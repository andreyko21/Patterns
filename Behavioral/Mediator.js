var OfficialDealer = /** @class */ (function () {
    function OfficialDealer() {
        this.customers = [];
        this.sellers = [];
    }
    OfficialDealer.prototype.orderAuto = function (customer, auto, info, seller) {
        var nameCust = customer.getName();
        var nameSeller = seller.getName();
        console.log("Order name: ".concat(nameCust, ". Order auto is ").concat(auto, ". Seller name: ").concat(nameSeller));
        console.log("Additional info: ".concat(info));
        this.addToCustomersList(nameCust);
        this.addToSellersList(nameSeller);
        seller.setCustomer(customer.name);
        customer.setSellers(seller.name);
    };
    OfficialDealer.prototype.addToCustomersList = function (name) {
        this.customers.push(name);
    };
    OfficialDealer.prototype.addToSellersList = function (name) {
        this.sellers.push(name);
    };
    OfficialDealer.prototype.getCustomerList = function () {
        return this.customers;
    };
    OfficialDealer.prototype.getSellerList = function () {
        return this.sellers;
    };
    return OfficialDealer;
}());
var Customer = /** @class */ (function () {
    function Customer(name, dealerMediator) {
        this.sellers = [];
        this.name = name;
        this.dealerMediator = dealerMediator;
    }
    Customer.prototype.setSellers = function (name) {
        var _a;
        (_a = this.sellers) === null || _a === void 0 ? void 0 : _a.push(name);
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getSellers = function () {
        return this.sellers;
    };
    Customer.prototype.makeOrder = function (auto, info, seller) {
        this.dealerMediator.orderAuto(this, auto, info, seller);
    };
    return Customer;
}());
var Seller = /** @class */ (function () {
    function Seller(name, dealerMediator) {
        this.customers = [];
        this.name = name;
        this.dealerMediator = dealerMediator;
    }
    Seller.prototype.setCustomer = function (name) {
        this.customers.push(name);
    };
    Seller.prototype.getName = function () {
        return this.name;
    };
    Seller.prototype.getCustomers = function () {
        return this.customers;
    };
    Seller.prototype.makeSell = function (auto, info, customer) {
        this.dealerMediator.orderAuto(customer, auto, info, this);
    };
    return Seller;
}());
var mediator = new OfficialDealer();
var yauhen = new Customer('Yauhen', mediator);
var valera = new Customer('Valera', mediator);
var andrey = new Seller('Andrey', mediator);
var vitaliy = new Seller('Vitaliy', mediator);
andrey.makeSell('Tesla', 'With autopilot!', valera);
andrey.makeSell('Audi', 'With parktronik!', yauhen);
vitaliy.makeSell('Audi2', 'With parktronik!', valera);
console.log(andrey.getCustomers());
console.log(valera.getSellers());
