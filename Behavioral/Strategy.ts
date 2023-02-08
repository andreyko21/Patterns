class Client {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeLogic(): void {
        console.log('Logic');
        const result = this.strategy.Cost();
        console.log(result);
    }
}

interface Strategy {
    Cost(): string;
}

class Bike implements Strategy {
    cost: number = 1;
    public Cost(): string {
        return `Cost: ${this.cost}`;
    }
}

class Car implements Strategy {
    cost: number = 5;
    public Cost(): string {
        return `Cost: ${this.cost}`;
    }
}

const context = new Context(new Car());
console.log('Client: rent bike.');
context.setStrategy(new Bike());
context.doSomeLogic();

console.log('');

console.log('Client: rent car.');
context.setStrategy(new Car());
context.doSomeLogic();
