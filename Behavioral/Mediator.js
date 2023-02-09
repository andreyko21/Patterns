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
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(cA, cB, cC) {
        this.componentA = cA;
        this.componentA.setMediator(this);
        this.componentB = cB;
        this.componentB.setMediator(this);
        this.componentC = cC;
        this.componentC.setMediator(this);
    }
    ConcreteMediator.prototype.notify = function (sender) {
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
    };
    return ConcreteMediator;
}());
var BaseComponent = /** @class */ (function () {
    function BaseComponent(mediator) {
        this.mediator = mediator;
    }
    BaseComponent.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseComponent;
}());
var ComponentA = /** @class */ (function (_super) {
    __extends(ComponentA, _super);
    function ComponentA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentA.prototype.operationA = function () {
        console.log('operationA');
    };
    return ComponentA;
}(BaseComponent));
var ComponentB = /** @class */ (function (_super) {
    __extends(ComponentB, _super);
    function ComponentB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentB.prototype.operationB = function () {
        console.log('operationB');
    };
    return ComponentB;
}(BaseComponent));
var ComponentC = /** @class */ (function (_super) {
    __extends(ComponentC, _super);
    function ComponentC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentC.prototype.operationC = function () {
        console.log('operationC');
    };
    return ComponentC;
}(BaseComponent));
var cA = new ComponentA();
var cB = new ComponentB();
var cC = new ComponentC();
var mediator = new ConcreteMediator(cA, cB, cC);
console.log('operation A.');
mediator.notify(cA);
console.log('');
console.log('operation B.');
mediator.notify(cB);
console.log('');
console.log('operation C.');
mediator.notify(cC);
