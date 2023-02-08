
interface Car {
    upgrade(): string;
}

class Audi implements Car {
    public upgrade(): string {
        return 'Audi';
    }
}

class Decorator implements Car {
    protected car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    public upgrade(): string {
        return this.car.upgrade();
    }
}

class DecoratorA extends Decorator {

    public upgrade(): string {
        return `Tuning car (${super.upgrade()})`;
    }
}

class DecoratorB extends Decorator {
    public upgrade(): string {
        return `Upgrade car (${super.upgrade()})`;
    }
}

function clientCode(car: Car) {
    console.log(`RESULT: ${car.upgrade()}`);
}

const audi = new Audi();
console.log('Client: I\'ve got a car:');
clientCode(audi);
console.log('');

const audiDecorator1 = new DecoratorA(audi);
const audiDecorator2 = new DecoratorB(audiDecorator1);
console.log('Client: Now I\'ve got a upgrade car:');
clientCode(audiDecorator2);
