interface IMediator {
    notify(sender: object): void;
 }
 
 class ConcreteMediator implements IMediator {
    private componentA: ComponentA;
    private componentB: ComponentB;
    private componentC: ComponentC;
 
    constructor(cA: ComponentA, cB: ComponentB, cC: ComponentC) {
        this.componentA = cA;
        this.componentA.setMediator(this);
        this.componentB = cB;
        this.componentB.setMediator(this);
        this.componentC = cC;
        this.componentC.setMediator(this);
    }

    public notify(sender: object): void {
        if (sender == cA) {
            console.log('Mediator reacts on A');
            this.componentA.operationA();
        }
        if (sender == cB) {
            console.log('Mediator reacts on B');
            this.componentB.operationB();
        }

        if (sender == cC) {
            console.log('Mediator reacts on C');
            this.componentC.operationC();
        }
    }
 }
  
 class BaseComponent {
    protected mediator: IMediator;

    constructor(mediator?: IMediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: IMediator): void {
        this.mediator = mediator;
    }
}

class ComponentA extends BaseComponent {
    public operationA(): void {
        console.log('operationA');
    }
}
 
class ComponentB extends BaseComponent {
    public operationB(): void {
        console.log('operationB');
    }
}
 
class ComponentC extends BaseComponent {
    public operationC(): void {
        console.log('operationC');
    }
}
 
const cA = new ComponentA();
const cB = new ComponentB();
const cC = new ComponentC();
const mediator = new ConcreteMediator(cA, cB, cC);

console.log('operation A.');
mediator.notify(cA);
console.log('');

console.log('operation B.');
mediator.notify(cB);



console.log('');
console.log('operation C.');
mediator.notify(cC);

