var User = /** @class */ (function () {
    function User(command) {
        this.command = command;
    }
    User.prototype.execute = function () {
        this.command.execute();
    };
    return User;
}());
var PC = /** @class */ (function () {
    function PC() {
        this.state = false;
    }
    PC.prototype.on = function () {
        this.state = true;
    };
    PC.prototype.off = function () {
        this.state = false;
    };
    return PC;
}());
var OnCommand = /** @class */ (function () {
    function OnCommand(pc) {
        this.pc = pc;
    }
    OnCommand.prototype.execute = function () {
        this.pc.on();
    };
    return OnCommand;
}());
var OffCommand = /** @class */ (function () {
    function OffCommand(pc) {
        this.pc = pc;
    }
    OffCommand.prototype.execute = function () {
        this.pc.off();
    };
    return OffCommand;
}());
function Change(command) {
    var user = new User(command);
    user.execute();
}
var pc = new PC();
var onStartCommand = new OnCommand(pc);
var offStartCommand = new OffCommand(pc);
console.log(pc);
Change(onStartCommand);
console.log(pc);
Change(offStartCommand);
console.log(pc);
