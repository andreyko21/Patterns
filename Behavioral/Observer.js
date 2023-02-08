var ConcreteCanal = /** @class */ (function () {
    function ConcreteCanal() {
        this.subscribers = [];
    }
    ConcreteCanal.prototype.subscribe = function (subscriber) {
        var isExist = this.subscribers.includes(subscriber);
        if (isExist) {
            return console.log('The user is already subscribed');
        }
        console.log("".concat(subscriber.name, " subscribed"));
        this.subscribers.push(subscriber);
    };
    ConcreteCanal.prototype.unSubscribe = function (subscriber) {
        var observerIndex = this.subscribers.indexOf(subscriber);
        if (observerIndex === -1) {
            return console.log("".concat(subscriber.name, " not subscribed"));
        }
        this.subscribers.splice(observerIndex, 1);
        console.log("".concat(subscriber.name, " unsubscribed"));
    };
    ConcreteCanal.prototype.notify = function () {
        console.log('Notifying subscribers...');
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(this);
        }
    };
    ConcreteCanal.prototype.newMessage = function () {
        console.log('You have unread news');
        this.notify();
    };
    return ConcreteCanal;
}());
var ConcreteSubscriber1 = /** @class */ (function () {
    function ConcreteSubscriber1(name) {
        this.name = name;
    }
    ;
    ConcreteSubscriber1.prototype.update = function (canal) {
        console.log("".concat(this.name, " Reacted to the news."));
    };
    return ConcreteSubscriber1;
}());
var ConcreteSubscriber2 = /** @class */ (function () {
    function ConcreteSubscriber2(name) {
        this.name = name;
    }
    ;
    ConcreteSubscriber2.prototype.update = function (canal) {
        console.log("".concat(this.name, " Reacted to the news."));
    };
    return ConcreteSubscriber2;
}());
var canal = new ConcreteCanal();
var subscriber1 = new ConcreteSubscriber1('Andrey');
canal.subscribe(subscriber1);
canal.unSubscribe(subscriber1);
canal.unSubscribe(subscriber1);
var subscriber2 = new ConcreteSubscriber2('Oleg');
canal.subscribe(subscriber2);
canal.newMessage();
canal.unSubscribe(subscriber2);
