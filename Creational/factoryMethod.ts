abstract class TransoprtCreate{
   type: string;

    constructor (type: string){
        this.type = type;
    }
   public abstract factoryMethod(): Transport;

   public createOperation(): string{
      const transport = this.factoryMethod();
      return `Creator: ${transport.operation()}`;
   }
}

class PlaneCreator extends TransoprtCreate {
    maxHeight: number;
    constructor(type: string, maxHeight: number){
        super(type);
        this.maxHeight = maxHeight;
    }
    public factoryMethod(): Transport {
        return new Plane(this.type, this.maxHeight);
    }
}

class CarCreator extends TransoprtCreate {

   public factoryMethod(): Transport {
       return new Car();
   }
}

interface Transport {
   operation(): string;
}

class Plane implements Transport {
    type: string;
    maxHeight: number;
    constructor(type: string, maxHeight: number){
        this.type = type;
        this.maxHeight = maxHeight;
    }
   public operation(): string {
       return 'Create new Plane';
   }
}

class Car implements Transport {
   public operation(): string {
       return 'Create new Car';
   }
}

function clientCode(creator: TransoprtCreate) {
   console.log(creator.createOperation());
}

clientCode(new PlaneCreator('Sport', 1000));

clientCode(new CarCreator('Sedan'));