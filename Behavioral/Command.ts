class PC {
    state: boolean; 
    constructor(){
        this.state = false;
    }
}
abstract class Command {
    pc: PC;
    constructor(pc: PC) {
        this.pc = pc;
    }
    abstract execute(...args: any[]): void;
}
class OnCommand extends Command {
    constructor(pc: PC) {
        super(pc);
    }
    execute() {
        this.pc.state = true;
    }
}
class OffCommand extends Command {
    constructor(pc: PC) {
        super(pc);
    }
    execute() {
        this.pc.state = false;
    }
}

class User {
    pc: PC;
    onCommand: OnCommand;
    offCommand: OffCommand;
    constructor() {
        this.pc = new PC();
        this.onCommand = new OnCommand(this.pc);
        this.offCommand = new OffCommand(this.pc);
    }
    getPCStatus() {
        return this.pc.state;
    }
}

const user = new User();
console.log(user.getPCStatus());
user.onCommand.execute();
console.log(user.getPCStatus());
user.offCommand.execute();
console.log(user.getPCStatus());

