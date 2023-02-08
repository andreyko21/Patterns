var Originator = /** @class */ (function () {
    function Originator(value) {
        this.value = value;
    }
    Originator.prototype.doSomething = function (value) {
        this.value = value;
        console.log(value);
    };
    Originator.prototype.save = function () {
        return new ConcreteHistory(this.value);
    };
    Originator.prototype.restore = function (value) {
        this.value = value.getValue();
        console.log(this.value);
    };
    return Originator;
}());
var ConcreteHistory = /** @class */ (function () {
    function ConcreteHistory(value) {
        this.value = value;
    }
    ConcreteHistory.prototype.getValue = function () {
        return this.value;
    };
    return ConcreteHistory;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker(originator) {
        this.originator = originator;
        this.historys = [];
    }
    Caretaker.prototype.backup = function () {
        console.log('\nSaving');
        this.historys.push(this.originator.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.historys.length) {
            return;
        }
        var history = this.historys.pop();
        console.log("Restoring: ".concat(history === null || history === void 0 ? void 0 : history.getValue()));
        this.originator.restore(history);
    };
    Caretaker.prototype.showHistory = function () {
        console.log('History');
        for (var _i = 0, _a = this.historys; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getValue());
        }
    };
    return Caretaker;
}());
var originator = new Originator('text1');
var caretaker = new Caretaker(originator);
caretaker.backup();
originator.doSomething('text2');
caretaker.backup();
originator.doSomething('text3');
caretaker.backup();
originator.doSomething('text4');
caretaker.backup();
originator.doSomething('text5');
console.log('');
caretaker.showHistory();
caretaker.undo();
caretaker.undo();
caretaker.undo();
