class OfficialDealer{
    customers: any;
    sellers: any;
    constructor(){
        this.customers = [];
        this.sellers = [];
    }

    orderAuto(customer: Customer, auto: string, info: string, seller: Seller){
        const nameCust = customer.getName();
        const nameSeller = seller.getName();
        console.log(`Order name: ${nameCust}. Order auto is ${auto}. Seller name: ${nameSeller}`);
        console.log(`Additional info: ${info}`);
        this.addToCustomersList(nameCust);
        this.addToSellersList(nameSeller);
        seller.setCustomer(customer.name);
        customer.setSellers(seller.name);
    }

    addToCustomersList(name: string){
        this.customers.push(name);
    }

    addToSellersList(name: string){
        this.sellers.push(name);
    }

    getCustomerList(){
        return this.customers;
    }

    getSellerList(){
        return this.sellers;
    }
}

class Customer {
    dealerMediator: OfficialDealer;
    name: string;
    sellers: string[] = [];
    constructor(name: string, dealerMediator: OfficialDealer){
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    setSellers(name: string){
        this.sellers?.push(name);
    }

    getName() {
        return this.name;
    }

    getSellers(){
        return this.sellers;
    }

    makeOrder(auto: string, info: string, seller: Seller){
        this.dealerMediator.orderAuto(this, auto, info, seller);
    }
}

class Seller {
    dealerMediator: OfficialDealer;
    customers: string[] = [];
    name: any;
    constructor(name: string, dealerMediator: OfficialDealer){
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    setCustomer(name: string){
        this.customers.push(name);
    }

    getName() {
        return this.name;
    }

    getCustomers() {
        return this.customers;
    }

    makeSell(auto: string, info: string, customer: Customer){
        this.dealerMediator.orderAuto(customer, auto, info, this);
    }
}

const mediator = new OfficialDealer();

const yauhen = new Customer('Yauhen',mediator);
const valera = new Customer('Valera',mediator);
const andrey = new Seller('Andrey',mediator);
const vitaliy = new Seller('Vitaliy',mediator);

andrey.makeSell('Tesla','With autopilot!',valera);
andrey.makeSell('Audi', 'With parktronik!',yauhen);
vitaliy.makeSell('Audi2', 'With parktronik!',valera);


console.log(andrey.getCustomers());
console.log(yauhen.getSellers());
