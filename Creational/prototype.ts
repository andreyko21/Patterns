interface IPrototype{
    clone(): this;
}

class Car implements IPrototype{
    typeCar: string;
    model: string;
    price: number;
    year: number;
    constructor(typeCar: string, model: string, price: number, year: number){
        this.typeCar = typeCar;
        this.model = model;
        this.price = price;
        this.year = year;
    }

    clone() {
        return Object.assign({}, this);
    }
}

function clientCode() {
    const p1 = new Car('Suv','fx',30000,2018);
    const p2 = p1.clone();
    p2.price = 25000;
    p2.year = 2015;
    console.log(p1);
    console.log(p2);  
}

clientCode();