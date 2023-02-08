class User {
    constructor(protected command){}
    execute() {
        this.command.execute();
    }
}

class PC{
    state: boolean; 
    constructor(){
        this.state = false;
    }

    on(){
        this.state = true;
    }

    off() {
         this.state = false;
    }
}

class OnCommand{
    constructor(protected pc: any){}

    execute(){
        this.pc.on();
    }
}

class OffCommand{
    constructor(protected pc: any){}

    execute(){
        this.pc.off();
    }
}

function Change(command: object){
        const user = new User(command);
        user.execute();
}

const pc = new PC();
const onStartCommand = new OnCommand(pc);
const offStartCommand = new OffCommand(pc);
console.log(pc);
Change(onStartCommand);
console.log(pc);
Change(offStartCommand);
console.log(pc);


