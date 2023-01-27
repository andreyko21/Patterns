var VictorianFactory = /** @class */ (function () {
    function VictorianFactory() {
    }
    VictorianFactory.prototype.createChair = function () {
        return new VictorianChair();
    };
    VictorianFactory.prototype.createSofa = function () {
        return new VictorianSofa();
    };
    return VictorianFactory;
}());
var ModernFactory = /** @class */ (function () {
    function ModernFactory() {
    }
    ModernFactory.prototype.createChair = function () {
        return new ModernChair();
    };
    ModernFactory.prototype.createSofa = function () {
        return new ModernSofa();
    };
    return ModernFactory;
}());
var VictorianChair = /** @class */ (function () {
    function VictorianChair() {
    }
    VictorianChair.prototype.ChairDesign = function () {
        return 'victorian chair';
    };
    return VictorianChair;
}());
var ModernChair = /** @class */ (function () {
    function ModernChair() {
    }
    ModernChair.prototype.ChairDesign = function () {
        return 'modern chair';
    };
    return ModernChair;
}());
var VictorianSofa = /** @class */ (function () {
    function VictorianSofa() {
    }
    VictorianSofa.prototype.SofaDesign = function () {
        return 'victorian sofa';
    };
    return VictorianSofa;
}());
var ModernSofa = /** @class */ (function () {
    function ModernSofa() {
    }
    ModernSofa.prototype.SofaDesign = function () {
        return 'modern sofa';
    };
    return ModernSofa;
}());
function clientCode(factory) {
    var chair = factory.createChair();
    var sofa = factory.createSofa();
    console.log(chair.ChairDesign());
    console.log(sofa.SofaDesign());
}
clientCode(new VictorianFactory());
