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
var Remote = /** @class */ (function () {
    function Remote(device) {
        this.device = device;
    }
    Remote.prototype.operation = function () {
        var result = this.device.operationImplementation();
        return "Remote operation with:\n".concat(result);
    };
    return Remote;
}());
var AdvancedRemote = /** @class */ (function (_super) {
    __extends(AdvancedRemote, _super);
    function AdvancedRemote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedRemote.prototype.operation = function () {
        var result = this.device.operationImplementation();
        return "AdvancedRemote operation with:\n".concat(result);
    };
    return AdvancedRemote;
}(Remote));
var Radio = /** @class */ (function () {
    function Radio() {
    }
    Radio.prototype.operationImplementation = function () {
        return 'Radio Here\'s the result on the platform';
    };
    return Radio;
}());
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.operationImplementation = function () {
        return 'TV Here\'s the result on the platform';
    };
    return TV;
}());
function clientCode(abstraction) {
    console.log(abstraction.operation());
}
var implementation = new Radio();
var abstraction = new Remote(implementation);
clientCode(abstraction);
console.log('');
implementation = new TV();
abstraction = new AdvancedRemote(implementation);
clientCode(abstraction);
