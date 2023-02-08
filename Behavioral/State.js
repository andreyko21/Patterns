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
var MessageStatus = /** @class */ (function () {
    function MessageStatus(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }
    MessageStatus.prototype.next = function () {
        return new this.nextStatus();
    };
    return MessageStatus;
}());
var Connect = /** @class */ (function (_super) {
    __extends(Connect, _super);
    function Connect() {
        return _super.call(this, 'waitingToConnect', Sending) || this;
    }
    return Connect;
}(MessageStatus));
;
var Sending = /** @class */ (function (_super) {
    __extends(Sending, _super);
    function Sending() {
        return _super.call(this, 'sending', Result) || this;
    }
    return Sending;
}(MessageStatus));
;
var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    function Result() {
        return _super.call(this, 'result', Result) || this;
    }
    return Result;
}(MessageStatus));
;
var Message = /** @class */ (function () {
    function Message() {
        this.state = new Connect();
    }
    Message.prototype.nextState = function () {
        this.state = this.state.next();
    };
    return Message;
}());
var myOrder = new Message();
console.log(myOrder.state.name);
myOrder.nextState();
console.log(myOrder.state.name);
myOrder.nextState();
console.log(myOrder.state.name);
