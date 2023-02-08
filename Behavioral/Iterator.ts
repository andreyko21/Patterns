interface IIterator{
    index: number;
    elements: any[];
    next(): any;
    hasNext(): boolean;
}

class ArrIterator implements IIterator{
    index: number;
    elements: any[];
    constructor(elements: any[]){
        this.index = 0;
        this.elements = elements;
    }

    next(){
        return this.elements[this.index++];
    }
    hasNext(){
        return this.index < this.elements.length;
    }
}

class ObjIterator implements IIterator{
    index: number;
    elements: any;
    keys: string[];
    constructor(elements: any){
        this.index = 0;
        this.keys = Object.keys(elements);
        this.elements = elements;
    }

    next(){
        return this.elements[this.keys[this.index++]];
    }
    hasNext(){
        return this.index < this.keys.length;
    }
}

const autos = {
    audi: { model: 'Audi', color: 'black', price: '20000'},
    bmw: { model: 'BMW', color: 'white', price: '30000'},
    tesla: { model: 'Tesla', color: 'gray', price: '40000'},
}

const mass = ['audi','bmw','mercedes','tesla'];

const collection = new ArrIterator(mass);  
const collection2 = new ObjIterator(autos);

while(collection.hasNext()){
    console.log(collection.next());
}

while(collection2.hasNext()){
    console.log(collection2.next());
}


