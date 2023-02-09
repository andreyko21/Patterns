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
var PC = /** @class */ (function () {
    function PC() {
        this.state = false;
    }
    return PC;
}());
var Command = /** @class */ (function () {
    function Command(pc) {
        this.pc = pc;
    }
    return Command;
}());
var OnCommand = /** @class */ (function (_super) {
    __extends(OnCommand, _super);
    function OnCommand(pc) {
        return _super.call(this, pc) || this;
    }
    OnCommand.prototype.execute = function () {
        this.pc.state = true;
    };
    return OnCommand;
}(Command));
var OffCommand = /** @class */ (function (_super) {
    __extends(OffCommand, _super);
    function OffCommand(pc) {
        return _super.call(this, pc) || this;
    }
    OffCommand.prototype.execute = function () {
        this.pc.state = false;
    };
    return OffCommand;
}(Command));
var User = /** @class */ (function () {
    function User() {
        this.pc = new PC();
        this.onCommand = new OnCommand(this.pc);
        this.offCommand = new OffCommand(this.pc);
    }
    User.prototype.getPCStatus = function () {
        return this.pc.state;
    };
    return User;
}());
var user = new User();
console.log(user.getPCStatus());
user.onCommand.execute();
console.log(user.getPCStatus());
user.offCommand.execute();
console.log(user.getPCStatus());
