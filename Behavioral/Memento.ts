class Originator {
    constructor(private value: string) {}

    public doSomething(value: string): void {
        this.value = value;
        console.log(value);
    }

    public save(): IHistory {
        return new ConcreteHistory(this.value);
    }

    public restore(value: IHistory): void {
        this.value = value.getValue();
        console.log(this.value);
    }
}

interface IHistory {
    getValue(): string;
}

class ConcreteHistory implements IHistory {
    constructor(private value: string) {}

    public getValue(): string {
        return this.value;
    }
}

class Caretaker {
    private historys: IHistory[] = [];

    constructor(private originator: Originator) {}

    public backup(): void {
        console.log('Saving');
        this.historys.push(this.originator.save());
    }

    public undo(): void {
        if (!this.historys.length) {
            return;
        }
        const history = this.historys.pop();

        console.log(`Restoring: ${history?.getValue()}`);
        this.originator.restore(history);
    }

    public showHistory(): void {
        console.log('History');
        for (const memento of this.historys) {
            console.log(memento.getValue());
        }
    }
}

const originator = new Originator('text1');
const caretaker = new Caretaker(originator);

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