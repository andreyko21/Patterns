var Phone = /** @class */ (function () {
    function Phone(model) {
        this.model = model;
        this.model = model;
    }
    return Phone;
}());
var PhoneFactory = /** @class */ (function () {
    function PhoneFactory(name) {
        this.models = [];
    }
    PhoneFactory.prototype.create = function (name) {
        var model = this.models[name];
        if (model)
            return model;
        else
            this.models[name] = new Phone(name);
        return this.models[name];
    };
    PhoneFactory.prototype.getModels = function () {
        console.table(this.models);
    };
    return PhoneFactory;
}());
var factory = new PhoneFactory("");
var samsung = factory.create('S7');
var samsung2 = factory.create('S7');
var iphone = factory.create('7');
console.log(factory.getModels());
