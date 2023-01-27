interface ICarCreate {
    addBody(): void;
	addWheals(): void;
}

class BMW implements ICarCreate {
	addBody(): void {
        console.log('add body BMW');
    }
	addWheals(): void {
		console.log(`add wheals BMW`);
	}
}

class Audi implements ICarCreate {
	addBody(): void {
        console.log('add body Audi');
    }
	addWheals(): void {
		console.log(`add wheals Audi`);
	}
}

class CreateCar {
	constructor (private car: ICarCreate) {}

	create() {
		this.car.addBody();
		this.car.addWheals();
	}
}

class RedCar extends CreateCar {
	constructor(car: ICarCreate) {
        super(car);
    }
    
    color(){
        console.log('add color red');
    }
    create(): void {
        super.create();
        this.color();
    }
}

class BlackCar extends CreateCar {
	constructor(car: ICarCreate) {
        super(car);
    }
    
    color(){
        console.log('add color black');
    }
    create(): void {
        super.create();
        this.color();
    }
}

const bmw = new RedCar(new BMW())
bmw.create();

const audi = new BlackCar(new Audi());
audi.create();
