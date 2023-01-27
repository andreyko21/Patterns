export interface Phones {
    getPrice(): number;
    getName(): string;
    addPhone(phone: Phones): void;
  }
  
  export class Phone implements Phones {
    constructor(private readonly price: number, private readonly name: string) { }
  
    getPrice() {
      return this.price;
    }

    getName(){
        return this.name;
    }

    addPhone() {}
  }

  export class Box implements Phones {
    private readonly phones: Phones[] = [];
  
    getPrice() {
      const allPrice = this.phones.reduce((acc, phone) => acc+phone.getPrice(), 0);
      return allPrice;
    }

    getName(){
        const allPhoneNames = this.phones.reduce((acc, phone) => acc+phone.getName()+", ", "");
        return allPhoneNames;
    }
  
    addPhone(phone: Phones) {
      this.phones.push(phone);
    }
  }

const phone1 = new Phone(200,"Samsung S7");
const phone2 = new Phone(350, "Iphone 11");
const box1 = new Box();
const box2 = new Box();
box2.addPhone(box1);

console.log(`phone1 price: ${phone1.getPrice()},00$, name: ${phone1.getName()}`);
console.log(`phone2 price: ${phone2.getPrice()},00$, name: ${phone2.getName()}`);

box1.addPhone(phone1);
box1.addPhone(phone2);
box2.addPhone(new Phone(500,"Samsung S20"));

console.log(`box1 price: ${box1.getPrice()},00$, names: ${box1.getName()}`);
console.log(`box2 price: ${box2.getPrice()},00$, names: ${box2.getName()}`);