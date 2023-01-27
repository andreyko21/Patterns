interface ICalculator {
    plus(): number;
    value1: number;
    value2: number;
}

class Calculator implements ICalculator {
    constructor(public value1: number,public value2: number){}
    
    plus(){
        return this.value1 + this.value2;
    }
}

class MinusDecorator implements ICalculator {
    object: ICalculator;
    value1: number;
    value2: number;
    constructor(object: ICalculator) {
        this.object = object
    }
    plus(){
       return this.object.plus();
    }
    
    minus(){
        return this.object.value1 - this.object.value2;
    }
}

const calc = new Calculator(10,5)
console.log(calc.plus())

const minusDec = new MinusDecorator(calc)
console.log(minusDec.minus())