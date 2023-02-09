interface IIterator {
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

interface IterableCollection {
    createIterator(): IIterator;
} 

class ArrCollection implements IterableCollection {
    collection: Number[] = [];
    constructor(c: Number[]) {
        this.collection = c;
    }
    createIterator(): IIterator {
        return new ArrIterator(this.collection);
    }
}

class ObjCollection implements IterableCollection {
    collection: any;
    constructor(c: any) {
        this.collection = c;
    }
    createIterator(): IIterator {
        return new ObjIterator(this.collection);
    }
}

const autos = {
    audi: { model: 'Audi', color: 'black', price: '20000'},
    bmw: { model: 'BMW', color: 'white', price: '30000'},
    tesla: { model: 'Tesla', color: 'gray', price: '40000'},
}

const concreteCollection = new ArrCollection([1, 2, 5, 8]);
const concreteCollection2 = new ObjCollection(autos);
const iterator = concreteCollection2.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}