var Phone = /** @class */ (function () {
    function Phone(sharedState) {
        this.sharedState = sharedState;
    }
    Phone.prototype.operation = function (uniqueState) {
        console.log("unique (".concat(JSON.stringify(uniqueState), ") state."));
    };
    return Phone;
}());
var PhoneFactory = /** @class */ (function () {
    function PhoneFactory(initialPhones) {
        this.phones = {};
        for (var _i = 0, initialPhones_1 = initialPhones; _i < initialPhones_1.length; _i++) {
            var state = initialPhones_1[_i];
            this.phones[this.getKey(state)] = new Phone(state);
        }
    }
    PhoneFactory.prototype.getKey = function (state) {
        return state.join('_');
    };
    PhoneFactory.prototype.getPhone = function (sharedState) {
        var key = this.getKey(sharedState);
        if (!(key in this.phones)) {
            console.log('PhonesFactory: Can\'t find a phone, creating new one.');
            this.phones[key] = new Phone(sharedState);
        }
        else {
            console.log('PhoneFactory: Reusing existing phone.');
        }
        return this.phones[key];
    };
    PhoneFactory.prototype.listPhones = function () {
        var count = Object.keys(this.phones).length;
        console.log("\nPhoneFactory: I have ".concat(count, " models of phones:"));
        for (var key in this.phones) {
            console.log(key);
        }
    };
    return PhoneFactory;
}());
var factory = new PhoneFactory([
    ['Iphone', '7', 'pink'],
    ['Samsung', 's7', 'black'],
    ['Xiaomi', 'redmi note 8', 'red'],
    ['Pixel', '7', 'red'],
    ['Iphone', '11', 'white'],
    // ...
]);
factory.listPhones();
function addPhone(ff, brand, model, color) {
    console.log('\nAdding a phone to database.');
    var flyweight = ff.getPhone([brand, model, color]);
}
addPhone(factory, 'Samsung', 's7', 'black');
addPhone(factory, 'Samsung', 'g5', 'red');
addPhone(factory, 'Samsung', 'g5', 'red');
factory.listPhones();
