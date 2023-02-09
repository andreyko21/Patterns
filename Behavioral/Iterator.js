var ArrIterator = /** @class */ (function () {
    function ArrIterator(elements) {
        this.index = 0;
        this.elements = elements;
    }
    ArrIterator.prototype.next = function () {
        return this.elements[this.index++];
    };
    ArrIterator.prototype.hasNext = function () {
        return this.index < this.elements.length;
    };
    return ArrIterator;
}());
var ObjIterator = /** @class */ (function () {
    function ObjIterator(elements) {
        this.index = 0;
        this.keys = Object.keys(elements);
        this.elements = elements;
    }
    ObjIterator.prototype.next = function () {
        return this.elements[this.keys[this.index++]];
    };
    ObjIterator.prototype.hasNext = function () {
        return this.index < this.keys.length;
    };
    return ObjIterator;
}());
var ArrCollection = /** @class */ (function () {
    function ArrCollection(c) {
        this.collection = [];
        this.collection = c;
    }
    ArrCollection.prototype.createIterator = function () {
        return new ArrIterator(this.collection);
    };
    return ArrCollection;
}());
var ObjCollection = /** @class */ (function () {
    function ObjCollection(c) {
        this.collection = c;
    }
    ObjCollection.prototype.createIterator = function () {
        return new ObjIterator(this.collection);
    };
    return ObjCollection;
}());
var autos = {
    audi: { model: 'Audi', color: 'black', price: '20000' },
    bmw: { model: 'BMW', color: 'white', price: '30000' },
    tesla: { model: 'Tesla', color: 'gray', price: '40000' }
};
var concreteCollection = new ArrCollection([1, 2, 5, 8]);
var concreteCollection2 = new ObjCollection(autos);
var iterator = concreteCollection2.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
