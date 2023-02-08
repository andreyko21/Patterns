class Phone {
    constructor(private sharedState: any) {}

    public operation(uniqueState): void {
        console.log(`unique (${JSON.stringify(uniqueState)}) state.`);
    }
}

class PhoneFactory {
    private phones: {[key: string]: Phone} = <any>{};

    constructor(initialPhones: string[][]) {
        for (const state of initialPhones) {
            this.phones[this.getKey(state)] = new Phone(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }

    public getPhone(sharedState: string[]): Phone {
        const key = this.getKey(sharedState);

        if (!(key in this.phones)) {
            console.log('PhonesFactory: Can\'t find a phone, creating new one.');
            this.phones[key] = new Phone(sharedState);
        } else {
            console.log('PhoneFactory: Reusing existing phone.');
        }

        return this.phones[key];
    }

    public listPhones(): void {
        const count = Object.keys(this.phones).length;
        console.log(`\nPhoneFactory: I have ${count} models of phones:`);
        for (const key in this.phones) {
            console.log(key);
        }
    }
}

const factory = new PhoneFactory([
    ['Iphone', '7', 'pink'],
    ['Samsung', 's7', 'black'],
    ['Xiaomi', 'redmi note 8', 'red'],
    ['Pixel', '7', 'red'],
    ['Iphone', '11', 'white'],
    // ...
]);
factory.listPhones();

function addPhone(
    ff: PhoneFactory, brand: string, model: string, color: string,
) {
    console.log('\nAdding a phone to database.');
    const phone = ff.getPhone([brand, model, color]);
}

addPhone(factory, 'Samsung', 's7', 'black');

addPhone(factory, 'Samsung', 'g5', 'red');
addPhone(factory, 'Samsung', 'g5', 'red');

factory.listPhones();
