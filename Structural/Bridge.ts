class Remote {
    protected device: IDevice;

    constructor(device: IDevice) {
        this.device = device;
    }

    public operation(): string {
        const result = this.device.operationImplementation();
        return `Remote operation with:\n${result}`;
    }
}

class AdvancedRemote extends Remote {
    public operation(): string {
        const result = this.device.operationImplementation();
        return `AdvancedRemote operation with:\n${result}`;
    }
}

interface IDevice {
    operationImplementation(): string;
}

class Radio implements IDevice {
    public operationImplementation(): string {
        return 'Radio Here\'s the result';
    }
}

class TV implements IDevice {
    public operationImplementation(): string {
        return 'TV Here\'s the result';
    }
}

function clientCode(abstraction: Remote) {
    console.log(abstraction.operation());
}

let implementation = new Radio();
let abstraction = new Remote(implementation);
clientCode(abstraction);

console.log('');

implementation = new TV();
abstraction = new AdvancedRemote(implementation);
clientCode(abstraction);

