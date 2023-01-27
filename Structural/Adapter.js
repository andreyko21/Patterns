var PowerUSA = /** @class */ (function () {
    function PowerUSA() {
    }
    PowerUSA.prototype.chargingUSA = function () {
        return 'Use charge USA';
    };
    return PowerUSA;
}());
var PowerEU = /** @class */ (function () {
    function PowerEU() {
    }
    PowerEU.prototype.chargingEU = function () {
        return 'Use charge EU';
    };
    return PowerEU;
}());
var PowerUSAToPowerEU = /** @class */ (function () {
    function PowerUSAToPowerEU(charger) {
        this.charger = charger;
    }
    PowerUSAToPowerEU.prototype.chargingEU = function () {
        console.log("addapting USA charger to EU, ".concat(this.charger.chargingUSA()));
    };
    return PowerUSAToPowerEU;
}());
var chargingLaptop = new PowerUSA();
var chargingAdapter = new PowerUSAToPowerEU(chargingLaptop);
chargingAdapter.chargingEU();
