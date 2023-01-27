interface IUSACharger{
    chargingUSA(): void;
}

interface IEUCharger{
    chargingEU(): void;
}

class PowerUSA implements IUSACharger {
    public chargingUSA(){
        return 'Use charge USA';
    }
}

class PowerEU implements IEUCharger{
    public chargingEU(){
        return 'Use charge EU';
    }
}

class PowerUSAToPowerEU implements IEUCharger {
    public charger : PowerUSA;

    constructor(charger: PowerUSA){
        this.charger = charger;
    }
    public chargingEU(){
        console.log(`addapting USA charger to EU, ${this.charger.chargingUSA()}`);
    }
}

let chargingLaptop = new PowerUSA();
let chargingAdapter = new PowerUSAToPowerEU(chargingLaptop);
chargingAdapter.chargingEU();
