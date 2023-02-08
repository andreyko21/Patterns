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
var autos = {
    audi: { model: 'Audi', color: 'black', price: '20000' },
    bmw: { model: 'BMW', color: 'white', price: '30000' },
    tesla: { model: 'Tesla', color: 'gray', price: '40000' }
};
var mass = ['audi', 'bmw', 'mercedes', 'tesla'];
var collection = new ArrIterator(mass);
var collection2 = new ObjIterator(autos);
while (collection.hasNext()) {
    console.log(collection.next());
}
while (collection2.hasNext()) {
    console.log(collection2.next());
}
